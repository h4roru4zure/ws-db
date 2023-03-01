'use strict';

/** @type {import('sequelize-cli').Migration} */

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async  (queryInterface)=>{
    await queryInterface.createTable(USER_TABLE,UserSchema);
  },

  down: async  (queryInterface)=>{
    await queryInterface.drop(USER_TABLE,UserSchema)
  }
};
