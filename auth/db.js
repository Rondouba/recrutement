const { Sequelize } = require('sequelize');

if (!global.gConfig.database_host) {
  console.error('veuillez fournir db_host dans le fichier de configuration...');
}

if (!global.gConfig.database_user) {
  console.error('veuillez fournir db_user dans le fichier de configuration...');
}

if (!global.gConfig.database_password) {
  console.error('veuillez fournir database_password dans le fichier de configuration...');
}

if (!global.gConfig.database_name) {
  console.error('veuillez fournir le nom de la base de données dans le fichier de configuration...');
}

const initDB = async () => {
  if (global.DB) {
    return Promise.resolve(global.DB);
  }
  global.DB = new Sequelize(
    global.gConfig.database_name,
    global.gConfig.database_user,
    global.gConfig.database_password,
    {
      host: global.gConfig.database_host,
      dialect: 'mysql',
      logging: console.log,
    },
  );

  return global.DB.authenticate()
    .then(() => {
      console.log('Connecté à la base de données...');
      return Promise.resolve(global.DB);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = {
  initDB,
};
