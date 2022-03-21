const { DataTypes } = require('sequelize');

const Attributes = {
  postId: {
    type: DataTypes.INTEGER,
  },
  categoryId: {  
    type: DataTypes.STRING,   
  },
};

module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    Attributes,
    {
      underscored: true,
      timestamps: false,
      tableName: 'PostsCategories',
    },
  );
  return PostCategory;
};
