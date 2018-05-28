const express = require("express");
const passport = require("passport");

const routes = express.Router();
const UserController = require("../controllers/user.controller");

routes.get(
  "/account",
  passport.authenticate("jwt", { session: false }),
  UserController.getUser
);
routes.post("/login", UserController.signIn);
routes.post("/register", UserController.signUp);

module.exports = routes;
