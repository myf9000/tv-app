const jwt = require("jsonwebtoken");
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

      user.save()
        .then(user => res.json(user))
        .catch(err => res.send(err.message));
    }
  });
};

const getUser = (req, res) => {
  console.log(req.user);
  res.json(req.user);
};

const signIn = (req, res) => {
  const body = _.pick(req.body, ["email", "password"]);
  User.findByCredentials(body.email, body.password)
    .then(user => {
      jwt.sign(
        { _id: user._id.toHexString() }, 
        process.env.JWT_SECRET, 
        { expiresIn: "3h" },
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token,
          });
        }
      );
    })
    .catch(() => res.status(400).send());
};

module.exports = {
  signUp,
  getUser,
  signIn
};
