function productRoutes(app, db) {
  app.get('/products', (req, res) => {
    const sqlQuery = 'SELECT PRODUCT_ID, PRODUCT_DESC, PRODUCT_NAME FROM SHOP.PRODUCT;';
    db.query(sqlQuery, (err, result) => {
      if (err) {
        res.send({ db_opr: 'SELECT', status: false });
      } else {
        const items = JSON.parse(JSON.stringify(result));
        const resultItems = [];
        for (let item in items) {
          resultItems.push(Object.create({
            id: item.PRODUCT_ID,
            description: item.PRODUCT_DESC,
            name: item.PRODUCT_NAME
          }));
        }
        res.send({
          products: items,
          db_opr: 'SELECT',
          status: true
        });
      }
    });
  });
}

module.exports = productRoutes;
