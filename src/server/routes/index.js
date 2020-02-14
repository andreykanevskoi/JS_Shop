const userRoutes = require('./user_routes');

function getRoutes(app, db) {
  userRoutes(app, db);
}

module.exports = getRoutes;
