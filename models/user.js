const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  displayName: {
    type: DataTypes.STRING,
  },
  email: {
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
     timestamps: false,
     tableName: 'Users',
   },
  );
  
    User.associate = (models) => {
      User.hasMany(models.BlogPost, { 
       as: 'blogsPosts',
        foreignKey: 'userId', 
      });
    };  
  
  return User;
};