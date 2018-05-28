const _ = require("lodash");
const gravatar = require("gravatar");
const User = require("../models/user");

const signUp = (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ Email: "Email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        default: "mm"
      });

      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
      });

      user
        .save()
        .then(() => {
          return user.generateAuthToken();
        })
        .then(token => {
          res.header("x-auth", token).send(user);
        })
        .catch(err => res.send(err.message));
    }
  });
};

const getUser = (req, res) => {
  res.send(req.user);
};

const signIn = (req, res) => {
  const body = _.pick(req.body, ["email", "password"]);
  User.findByCredentials(body.email, body.password)
    .then(user =>
      user
        .generateAuthToken()
        .then(token => res.header("x-auth", token).send(user))
    )
    .catch(() => res.status(400).send());
};

module.exports = {
  signUp,
  getUser,
  signIn
};
