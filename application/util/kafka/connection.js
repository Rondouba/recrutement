/* eslint-disable no-multi-assign */
/* eslint-disable camelcase */
const kafka = require('kafka-node');

function ConnectionProvider() {
  this.getConsumer = (topic_name) => {
    this.client = new kafka.KafkaClient({
      kafkaHost: global.gConfig.kafka_host,
    });
    this.kafkaConsumerConnection = new kafka.Consumer(this.client, [
      { topic: topic_name, partition: 0 },
    ]);
    this.client.on('ready', () => {
      console.log('client ready!');
    });
    return this.kafkaConsumerConnection;
  };

  // Code sera bien executeé quand le Producer demarera
  this.getProducer = () => {
    if (!this.kafkaProducerConnection) {
      this.client = new kafka.KafkaClient({
        kafkaHost: global.gConfig.kafka_host,
      });
      const { HighLevelProducer } = kafka;
      this.kafkaProducerConnection = new HighLevelProducer(this.client);
      console.log('producer ready');
    }
    return this.kafkaProducerConnection;
  };
}
exports = module.exports = new ConnectionProvider();
