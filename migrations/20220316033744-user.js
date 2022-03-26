'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('Users', {
      id: {     
        type: Sequelize.INTEGER,
      },
      displayName: {
        type: Sequelize.STRING,
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      image: { 
        type: Sequelize.STRING,
      }, 
    })
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Users')
  }
};
