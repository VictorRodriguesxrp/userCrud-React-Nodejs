const Sequelize = require("sequelize");
const dbConfig = require("../config/database")

const connection = new Sequelize(dbConfig);

try {
  connection.authenticate();
  console.log('Connection has established sucessfuly')
} catch (error) {
  console.log('error', error)
}

const User = require("../models/User")

User.init(connection);


module.exports = connection;