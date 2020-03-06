function cartRoutes(app, db_models) {
  // get all products from user's cart
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

  // delete product(s) from user's cart
  app.delete('/cart', (req, res) => {

    var { id, products } = req.body;

    products = JSON.parse(products);

    db_models.Cart.findOne({
      where: {
        USER_ID: id
      }
    })
      .then((db_result) => {
        return db_result.CART_ID;
      })
      .then((cart_id) => {
        products.forEach((product) => {
          db_models.CartToProduct.destroy({
            where: {
              PRODUCT_ID: product.id,
              CART_ID: cart_id
            }
          })
        });
        res.send({
          db_opr: 'DELETE',
          status: true
        });
      })
      .catch((err) => {
        res.send({
          db_opr: 'DELETE',
          status: false,
          err: err
        });
      })
  })

  // add new product(s) to user's cart
  app.put('/cart', (req, res) => {
    var { id, products } = req.body;

    products = JSON.parse(products);

    db_models.Cart.findOne({
      where: {
        USER_ID: id
      }
    })
      .then((db_result) => {
        return db_result.CART_ID;
      })
      .then((cart_id) => {
        products.forEach((product) => {
          db_models.CartToProduct.create({
            CART_ID: cart_id,
            PRODUCT_ID: product.id,
            PRODUCT_AMOUNT: product.amount
          })
        });
        res.send({
          db_opr: 'INSERT',
          status: true
        });
      })
      .catch((err) => {
        res.send({
          db_opr: 'INSERT',
          status: false,
          err: err
        });
      })

  })

}

module.exports = cartRoutes;