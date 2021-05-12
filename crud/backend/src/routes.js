const express = require("express");

const routes = express.Router();

const createUserController = require('./controllers/CreateUserController');

routes.post("/users", createUserController.handle);

module.exports = routes;