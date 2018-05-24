const _ = require('lodash');
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

const getUser = (req, res) => {
  res.send(req.user);
};

const signIn = (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  User.findByCredentials(body.email, body.password)
    .then(user => user.generateAuthToken()
      .then(token => res.header('x-auth', token).send(user)))
    .catch(() => res.status(400).send());
};

module.exports = {
  signUp,
  getUser,
  signIn,
};

