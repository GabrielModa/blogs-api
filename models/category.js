const { DataTypes } = require('sequelize');

const Attributes = { 
  name: {
    type: DataTypes.STRING,   
  },
};

module.exports = (sequelize, _DataTypes) => {
  const Category = sequelize.define(
    'Category',
    Attributes,
    {
      timestamps: false,
      tableName: 'Categories',
    },
  );

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, { 
      as: 'categories', 
      foreignKey: 'categoryId',
     });
  };

  return Category;
};
