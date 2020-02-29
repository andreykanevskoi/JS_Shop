const userRoutes = require('./user_routes');
const productRoutes = require('./product_routes');

function getRoutes(app, db_models) {
  userRoutes(app, db_models);
  productRoutes(app, db_models);
}

module.exports = getRoutes;
