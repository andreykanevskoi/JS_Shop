const { Sequelize } = require('sequelize');
const dbInfo = require('./db_info');

module.exports = new Sequelize(
  dbInfo.database, 
  dbInfo.user, 
  dbInfo.password, 
  {
    host: dbInfo.host,
    dialect: 'mysql'
  }
);