function cartRoutes(app, db_models) {
  app.post('/cart', (req, res) => {
    const { id } = req.body;
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
        var Products = JSON.parse(JSON.stringify(cartProducts));
        Products = Products[0].Products;
        Products.forEach((prod) => {
          const amount = prod.CartToProduct.PRODUCT_AMOUNT;
          prod.PRODUCT_AMOUNT = amount;
          delete prod.CartToProduct;
        })
        res.send({
          products: Products,
          db_opr: 'SELECT',
          status: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
    })
  });
}

module.exports = cartRoutes;