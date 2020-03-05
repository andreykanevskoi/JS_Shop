function productRoutes(app, db_models, db = undefined) {
  app.get('/products', (req, res) => {
    db_models.Product.findAll()
      .then((items) => {
        res.send({
          products: items,
          db_opr: 'SELECT',
          status: true
        });
      })
      .catch((err) => {
        res.send({
          db_opr: 'SELECT',
          status: false,
          err: err
        });
      })
  });
}


module.exports = productRoutes;
