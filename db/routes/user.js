const express = require("express");

const routes = express.Router();
const UserController = require("../controllers/user.controller");
const authenticate = require("../middleware/authenticate");

routes.get("/account", authenticate, UserController.getUser);
routes.post("/login", UserController.signIn);
routes.post("/register", UserController.signUp);

module.exports = routes;
