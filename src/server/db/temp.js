const db_models = require('./models');

const id = 3;
db_models.Cart.findOne({
  where: {
    USER_ID: id
  }
})
.then((db_result) => {
  return db_result.CART_ID;
})
.then((cart_id) => {
  db_models.Cart.findAll({
    where: {
      CART_ID: cart_id
    },
    include: [{
      model: db_models.Product,
      through: {
        attributes: ['PRODUCT_ID', 'PRODUCT_NAME', 'PRODUCT_DESC', 'PRODUCT_AMOUNT'],
      }
    }]
  })
  .then((cartProducts) => {
    cartProducts.every((prod) => {console.log(JSON.stringify(prod))});
  })
  .catch((err) => {
    console.log(err);
  })
})