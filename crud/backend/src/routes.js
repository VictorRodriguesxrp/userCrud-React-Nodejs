const express = require("express");

const routes = express.Router();

const createUserController = require('./controllers/CreateUserController');
const operationUsersController = require("./controllers/OperationUsersController");

routes.post("/users", createUserController.handle);
routes.get("/users", operationUsersController.listAll)
routes.delete("/users/:id", operationUsersController.deleteUserById)
routes.put("/users/:id", operationUsersController.updateUserById)

module.exports = routes;