const jwt = require("jsonwebtoken");
const _ = require("lodash");
const gravatar = require("gravatar");
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const User = require("../models/user");

const signUp = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
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
  res.json(req.user);
};

const signIn = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

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
    .catch(data => { 
      const arr = Object.values(data);
      errors[arr[0]] = arr[1];
      res.status(400).json(errors);
    });
};

module.exports = {
  signUp,
  getUser,
  signIn
};
