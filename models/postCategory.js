const { DataTypes } = require('sequelize');

const Attributes = { 
  postId: {
    type: DataTypes.INTEGER,   
  },
  categoryId: {
    type: DataTypes.INTEGER,   
  },
};

module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  Attributes,     
    { timestamps: false, tableName: 'PostsCategories' });

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
         as: 'posts', 
          foreignKey: 'categoryId',
          otherKey: 'postId',
          through: PostCategory,           
        });    
          models.BlogPost.belongsToMany(models.Category, {
         as: 'categories',
          foreignKey: 'postId',
          otherKey: 'categoryId',
          through: PostCategory,
         });
        };           
        return PostCategory;
};
