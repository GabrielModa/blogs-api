const { BlogPost, Category, User } = require('../models');

const post = async (req, res) => {
   const { title, content, categoryIds } = req.body;

   const allCategory = await Category.findAll();
   const getCategoryById = allCategory.map(({ id }) => id);
   
   const checkId = categoryIds.every((id) => getCategoryById.includes(id));
   if (!checkId) return res.status(400).json({ message: '"categoryIds" not found' });

   const findToken = await User.findOne({ where: { email: req.tokenData } });

   const newPost = await BlogPost.create(
     { userId: findToken.id,
      title,
      content },
  );

   res.status(201).json(newPost);
}; 

module.exports = {
  post,
};