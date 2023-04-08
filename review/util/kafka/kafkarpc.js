/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable no-multi-assign */
const crypto = require('crypto');
const conn = require('./connection');

const TIMEOUT = 8000; // temps d'attente de réponse en ms
let self;

function KafkaRPC() {
  self = this;
  this.connection = conn;
  this.requests = {}; // hachage pour stocker la demande en attente de réponse
  this.response_queue = false; // espace réservé pour la future file d'attente
  this.producer = this.connection.getProducer();
}

KafkaRPC.prototype.makeRequest = function (topic_name, content, callback) {
  self = this;
  // générer un identifiant de corrélation unique pour cet appel
  const correlationId = crypto.randomBytes(16).toString('hex');

  // créer un délai d'attente pour ce qui devrait se passer si nous n'obtenons pas de réponsee
  const tId = setTimeout(
    (corr_id) => {
      // si cela est appelé, nous n'avons pas reçu de réponse dans un
      // mode opportune
      callback(new Error(`timeout ${corr_id}`));
      // supprimer l'entrée du hachage
      delete self.requests[corr_id];
    },
    TIMEOUT,
    correlationId,
  );

  // créer une entrée de demande à stocker dans un hachage
  const entry = {
    callback,
    timeout: tId, // the id for the timeout so we can clear it
  };

  // mettre l'entrée dans le hachage afin que nous puissions faire correspondre la réponse plus tard
  self.requests[correlationId] = entry;

  // assurez-vous que nous avons un sujet de réponse
  self.setupResponseQueue(self.producer, topic_name, () => {
    const payloads = [
      {
        topic: topic_name,
        messages: JSON.stringify({
          correlationId,
          replyTo: 'response_topic',
          data: content,
        }),
        partition: 0,
      },
    ];
    self.producer.send(payloads, (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });
  });
};

KafkaRPC.prototype.setupResponseQueue = function (producer, topic_name, next) {
  // ne plaisante pas si nous avons une file d'attente
  if (this.response_queue) return next();

  self = this;

  // s'abonner aux messages
  const consumer = self.connection.getConsumer('response_topic');
  consumer.on('message', (message) => {
    console.log('msg received');
    const data = JSON.parse(message.value);
    // obtenir l'ID de corrélation
    const { correlationId } = data;
    // est-ce une réponse à une demande en attente
    if (correlationId in self.requests) {
      // récupérer l'entrée de la demande
      const entry = self.requests[correlationId];
      // assurez-vous que nous n'expirons pas en l'effaçant
      clearTimeout(entry.timeout);
      // supprimer l'entrée du hachage
      delete self.requests[correlationId];
      if (data.data.isError) {
        entry.callback(data.data.error, null);
        return;
      }
      // rappel, pas d'erreur
      entry.callback(null, data.data);
    }
  });
  self.response_queue = true;
  console.log('returning next');
  return next();
};

exports = module.exports = KafkaRPC;
