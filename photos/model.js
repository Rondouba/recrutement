const { DataTypes } = require('sequelize');

const Photo = global.DB.define('photos', {
  _id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  altText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM(['APPROVED', 'REJECTED', 'PENDING']),
  },
});

const runMigration = async (force) => {
  if (!global.DB) {
    return Promise.reject(new Error('veuillez initialiser la base de données'));
  }
  await Photo.sync({ force });
  return Promise.resolve(global.DB);
};

module.exports = { Photo, runMigration };
