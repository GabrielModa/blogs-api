'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('PostsCategories', {
   
    postId: {
     allowNull: false,
     autoIncrement: true,
     primaryKey: true,
     type: Sequelize.INTEGER,
   },
   categoryId: {
     allowNull: false,
     type: Sequelize.STRING,   
   },
   })
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('PostsCategories')   
  }
};
