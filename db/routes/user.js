const express = require('express');

const routes = express.Router();
const UserController = require('../controllers/user.controller');
const authenticate = require('../middleware/authenticate');

routes.get('/users/me', authenticate, UserController.getUser);
routes.post('/users/login', UserController.signIn);
routes.post('/', UserController.signUp);

module.exports = routes;
