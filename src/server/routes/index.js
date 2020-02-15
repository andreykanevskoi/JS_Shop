const userRoutes = require('./user_routes');
const productRoutes = require('./product_routes');

function getRoutes(app, db) {
  userRoutes(app, db);
  productRoutes(app, db);
}

module.exports = getRoutes;
