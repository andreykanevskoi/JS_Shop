const models = require('./models');

models.Cart.findAll({
  include: models.Product
}).then((Carts) => {
  console.log(JSON.stringify(Carts));
});
