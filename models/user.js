const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  displayName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: { 
    allowNull: false,
    type: DataTypes.STRING,
  },
};
module.exports = (sequelize, _DataTypes) => {
  const User = sequelize.define(
    'User',
   Attributes,
   {
     underscored: true,
     timestamps: false,
     tableName: 'Users',
   },
  );

  User.associate = (models) => {
    User.hasMany(models.blogPost, { foreignKey: 'userId', as: 'blogsPosts' });
  };
  
  return User;
};