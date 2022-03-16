const { DataTypes } = require('sequelize');

const Attributes = {
  postId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  categoryId: {
    allowNull: false,
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
