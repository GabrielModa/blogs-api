'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('PostsCategories', {   
    postId: {
     allowNull: false,
     primaryKey: true,
     type: Sequelize.INTEGER,
     onUpdate: 'CASCADE',
     onDelete: 'CASCADE',     
   },
   categoryId: {
     allowNull: false,
     primaryKey: true,
     type: Sequelize.STRING,
     onUpdate: 'CASCADE',
     onDelete: 'CASCADE',    
   },
   })
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('PostsCategories')   
  }
};
