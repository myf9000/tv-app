const User = require('../models/user');

const signUp = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user.save()
    .then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user);
    })
    .catch(err => res.send(err.message));
};

module.exports = {
  signUp,
};

