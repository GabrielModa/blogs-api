const { DataTypes } = require('sequelize');

const Attributes = { 
  title: {
    type: DataTypes.STRING,   
  },
  content: {
    type: DataTypes.STRING,   
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  published: {
    type: DataTypes.DATE,
  },
  updated: {
    type: DataTypes.DATE,
  },
};

module.exports = (sequelize, _DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    Attributes,
    { timestamps: false,
      tableName: 'BlogPosts',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { 
      as: 'user',
       foreignKey: 'userId', 
    });
  };
  
  return BlogPost;
};
