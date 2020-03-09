/*
    Файл        : server/product_routes.js
    Автор       : Каневской Андрей 
    Описание    : Содержит инструкции по настройке и запуску сервера.
                : Для конфигурации и запуска используется ExpressJS.
    
    2020г.
*/


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const findRoute = require('./routes/index.js');
const db_connect = require('./db/db_model');
const db_models = require('./db/models');

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db_connect.authenticate()
  .then(() => {
    findRoute(app, db_models);
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Sequelize works...`);
      console.log(`Listening on port ${process.env.PORT || 8080}!`);
    });
  })
  .catch((err) => {
    if (err) return console.log(err);
  });