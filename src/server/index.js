const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const os = require('os');
// const pass = require('path');
const dbConfig = require('./config/db_info');

const app = express();

const findRoute = require('./routes/index.js');

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection(dbConfig);

// eslint-disable-next-line consistent-return
connection.connect((err) => {
  if (err) return console.log(err);
  findRoute(app, connection);
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT || 8080}!`);
  });
});
