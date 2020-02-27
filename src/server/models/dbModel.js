const { Sequelize, DataTypes } = require('sequelize');
const dbInfo = require('./dbInfo');

module.exports = new Sequelize(
  dbInfo.database, 
  dbInfo.user, 
  dbInfo.password, 
  {
    host: dbInfo.host,
    dialect: 'mysql'
  }
);