const express = require('express');

const routes = express.Router();
const UserController = require('../controllers/user.controller');
const authenticate = require('../middleware/authenticate');

routes.get('/users/me', authenticate, UserController.signUp);
routes.post('/', UserController.createUser);

module.exports = routes;
