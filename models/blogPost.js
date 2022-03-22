const { DataTypes } = require('sequelize');

const Attributes = { 
  title: {
    type: DataTypes.STRING,   
  },
  content: {
    type: DataTypes.STRING,   
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
    {
      timestamps: false,
      tableName: 'BlogPosts',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};
