'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.UUID,
        primaryKey: true,
        allowNull: false 
      },

      name: {
        type: sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: sequelize.STRING
      },

      created_at: {
        type: sequelize.DATE,
      },

      updated_at: {
        type: sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  }
};
