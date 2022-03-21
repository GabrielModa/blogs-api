'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('PostsCategories', {   
    postId: {  
     type: Sequelize.INTEGER,
   },
   categoryId: {
     type: Sequelize.STRING,   
   },
   })
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('PostsCategories')   
  }
};
