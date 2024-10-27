const { Sequelize } = require("sequelize");
const bcrypt = require('bcrypt');
// require('dotenv').config()

module.exports = {
  up: (queryInterface, Sequelize) => {
    let password = process.env.ADMIN_EMAIL;
    const hashPassword = bcrypt.hashSync(password, 10);
    return queryInterface.bulkInsert('user', [{
      userType: '0',
      firstName: 'admin',
      lastName: 'adminov',
      email: process.env.ADMIN_PASSWORD,
      password: hashPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', {userType: '0'}, {});
  }
};