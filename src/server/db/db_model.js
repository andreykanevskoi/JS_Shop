/*
    Файл        : server/db/db_model.js
    Автор       : Каневской Андрей 
    Описание    : Содержит объект ORM Sequelize для работы с БД.
    
    2020г.
*/

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