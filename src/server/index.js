const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// const dbConfig = require('./config/db_info');
const app = express();

app.use(cors());

const findRoute = require('./routes/index.js');

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const connection = mysql.createConnection(dbConfig);

const db_connect = require('./db/db_model');

db_connect.authenticate()
  .then(() => {
    findRoute(app, connection);
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Sequelize works...`);
      console.log(`Listening on port ${process.env.PORT || 8080}!`);
    });
  })
  .catch((err) => {
    if (err) return console.log(err);
  });


// connection.connect((err) => {
//   if (err) return console.log(err);
//   findRoute(app, connection);
//   app.listen(process.env.PORT || 8080, () => {
//     console.log(`Listening on port ${process.env.PORT || 8080}!`);
//   });
// });
