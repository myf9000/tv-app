const User = require('../models/user');

const signUp = (req, res) => {
  const user = new User();
  user.email = req.body.email;
  user.password = req.body.password;

  user.save()
    .then((save) => {
      res.status(200);
      res.json(save);
    })
    .catch(err => res.send(err.message));
};

module.exports = {
  signUp,
};

