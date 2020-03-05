function userRoutes(app, db_models) {

  // registration
  app.post('/reg', (req, res) => {
    const { email, password } = req.body;

    db_models.User.create({
      USER_EMAIL: email,
      USER_PASSWORD: password
    })
      .then((new_user) => {
        res.send({
          id: new_user.USER_ID,
          email: new_user.USER_EMAIL,
          db_opr: 'INSERT',
          status: true
        })
      })
      .catch((err) => {
        res.send({
          id: -1,
          email: email,
          db_opr: 'INSERT',
          status: false,
          err: err
        })
      })
  });

  // authorization
  app.post('/auth', (req, res) => {
    const { email, password } = req.body;

    User.findOne({
      where: {
        USER_EMAIL: email,
        USER_PASSWORD: password
      },
      attributes: ['USER_ID']
    })
      .then((results) => {
        if (results == null) {
          res.send({
            id: null, email: email, db_opr: 'SELECT', status: false, msg: "user doesn't exist"
          });
          return;
        }
        else {
          res.send({
            id: results.USER_ID,
            email: email,
            db_opr: 'SELECT',
            status: true
          });
        }
      })
      .catch((err) => {
        res.send({
          id: null, email: email, db_opr: 'SELECT', status: false, msg: "db error"
        });
      })
    return;
  });

}

module.exports = userRoutes;
