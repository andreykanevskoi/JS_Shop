  // app.put('/users/:id', (req, res) => {
  //   const user = {
  //     id: req.params.id,
  //     email: req.body.email,
  //     pw: req.body.pw
  //   };
  //   const sqlQuery = `UPDATE SHOP.USER 
  //       SET USER_EMAIL='${user.email}', 
  //       USER_PASSWORD='${user.pw}' 
  //       WHERE USER_ID=${user.id}`;

  //   db.query(sqlQuery, (err) => {
  //     if (err) {
  //       res.send({ id: user.id, db_opr: 'UPDATE', status: false });
  //     } else {
  //       res.send({ id: user.id, db_opr: 'UPDATE', status: true });
  //     }
  //   });
  // });

  // app.delete('/users/:id', (req, res) => {
  //   const { id } = req.params;
  //   const sqlQuery = `DELETE FROM SHOP.USER WHERE USER_ID = ${id};`;
  //   db.query(sqlQuery, (err) => {
  //     if (err) {
  //       res.send({ id, db_opr: 'DELETE', status: false });
  //     } else {
  //       res.send({ id, db_opr: 'DELETE', status: true });
  //     }
  //   });
  // });

  // app.get('/users/:id', (req, res) => {
  //   const { id } = req.params;
  //   const sqlQuery = `SELECT USER_ID, USER_EMAIL FROM SHOP.USER WHERE USER_ID = ${id};`;
  //   db.query(sqlQuery, (err, result) => {
  //     if (err) {
  //       res.send({ id, db_opr: 'SELECT', status: false });
  //     } else {
  //       const item = JSON.parse(JSON.stringify(result[0]));
  //       res.send({
  //         id: item.USER_ID, email: item.USER_EMAIL, db_opr: 'SELECT', status: true
  //       });
  //     }
  //   });
  // });

  // app.post('/users', (req, res) => {
  //   const user = {
  //     email: req.body.email,
  //     pw: req.body.pw
  //   };
  //   const sqlQuery = `INSERT INTO SHOP.USER (USER_EMAIL, USER_PASSWORD) VALUES ('${user.email}', '${user.pw}');`;
  //   db.query(sqlQuery, (err, result) => {
  //     if (err) {
  //       res.send({ email: user.email, db_opr: 'INSERT', status: false });
  //     } else {
  //       res.send({ id: result.insertId, db_opr: 'INSERT', status: true });
  //     }
  //   });
  // });

    // app.post('/_auth', (req, res) => {
  //   console.log(req.body);
  //   const { email } = req.body;
  //   const { password } = req.body.password;
  //   console.log(`email: ${email} password: ${password}`);
  //   const sqlQuery = `SELECT USER_ID, USER_EMAIL FROM SHOP.USER WHERE USER_EMAIL = "${email}" AND USER_PASSWORD = "${password}";`;
  //   db.query(sqlQuery, (err, result) => {
  //     if (err) {
  //       res.send({ id, db_opr: 'SELECT', status: false, msg: 'db error' });
  //     }
  //     else {
  //       if (result[0] == undefined) {
  //         res.send({
  //           id: null, email: email, db_opr: 'SELECT', status: false, msg: "user doesn't exist"
  //         });
  //         return;
  //       }
  //       const item = JSON.parse(JSON.stringify(result[0]));
  //       if (item != undefined)
  //         res.send({
  //           id: item.USER_ID, email: item.USER_EMAIL, db_opr: 'SELECT', status: true
  //         });
  //     }
  //   });
  // })


// function _productRoutes(app, db_models, db = undefined) {
//   app.get('/products', (req, res) => {
//     const sqlQuery = 'SELECT PRODUCT_ID, PRODUCT_DESC, PRODUCT_NAME FROM SHOP.PRODUCT;';
//     db.query(sqlQuery, (err, result) => {
//       if (err) {
//         res.send({ db_opr: 'SELECT', status: false });
//       } else {
//         const items = JSON.parse(JSON.stringify(result));
//         const resultItems = [];
//         for (let item in items) {
//           resultItems.push(Object.create({
//             id: item.PRODUCT_ID,
//             description: item.PRODUCT_DESC,
//             name: item.PRODUCT_NAME
//           }));
//         }
//         res.send({
//           products: items,
//           db_opr: 'SELECT',
//           status: true
//         });
//       }
//     });
//   });
// }