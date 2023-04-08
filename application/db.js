const mongoose = require('mongoose');

if (!global.gConfig.database_conn) {
  console.error('veuillez fournir database_conn dans le fichier de configuration...');
}

const initDB = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect(global.gConfig.database_conn);
};

module.exports = {
  initDB,
};
