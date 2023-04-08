const { DataTypes } = require('sequelize');

const Chat = global.DB.define('chat', {
  _id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
  },
  employerId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const Message = global.DB.define('message', {
  _id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
  },
  content: { // contenu
    type: DataTypes.TEXT,
    allowNull: false,
  },
  to: { // de
    type: DataTypes.STRING,
    allowNull: false,
  },
  from: { // a
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Chat.hasMany(Message, {
  foreignKey: 'chatId', // clé étrangère
  sourceKey: '_id',
});

Message.belongsTo(Chat, {
  foreignKey: 'chatId',
  targetKey: '_id',
});

const runMigration = async (force) => {
  if (!global.DB) {
    return Promise.reject(new Error('veuillez initialiser la base de données'));
  }
  await Chat.sync({ force });
  await Message.sync({ force });
  return Promise.resolve(global.DB);
};

module.exports = { Chat, Message, runMigration };
