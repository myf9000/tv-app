const express = require("express");
const passport = require("passport");
const routes = express.Router();
const UserController = require("../controllers/user.controller");

routes.get(
  "/api/account",
  passport.authenticate("jwt", { session: false }),
  UserController.getUser
);
routes.post("/api/login", UserController.signIn);
routes.post("/api/register", UserController.signUp);

module.exports = routes;
