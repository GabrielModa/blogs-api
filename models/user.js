const { DataTypes } = require('sequelize');

const Attributes = {
  displayName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
};
module.exports = (sequelize, _DataTypes) => {
  const User = sequelize.define(
    'User',
   Attributes,
   {
     timestamps: false,
     tableName: 'Users',
   },
  );
  
    User.associate = (models) => {
      User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blogsPosts' });
    };
  
  return User;
};