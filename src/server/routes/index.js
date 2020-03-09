/*
    Файл        : server/routes/index.js
    Автор       : Каневской Андрей 
    Описание    : Собирает обработчики маршруто в одну функцию.
    
    2020г.
*/


const userRoutes = require('./user_routes');
const productRoutes = require('./product_routes');
const cartRoutes = require('./cart_routes');

function findRoutes(app, db_models) {
  userRoutes(app, db_models);
  productRoutes(app, db_models);
  cartRoutes(app, db_models);
}

module.exports = findRoutes;
