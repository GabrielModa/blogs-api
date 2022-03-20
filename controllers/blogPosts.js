const { /* BlogPost, */ Category } = require('../models');

const post = async (req, res) => {
   const { title, content, categoryIds } = req.body;
  //  const { id } = req.params;

  //  const checkPost = BlogPost.findOne({ where: { title, content, categoryIds } });
  //  console.log(checkPost);
  //  if (!checkPost) return res.status(400).json({ message: 'Invalid fields' });

   const checkCategory = await Category.findById({ categoryIds });
   console.log('testeeeee,', checkCategory);
  //  if (!checkCategory) return res.status(400).json({ message: 'categoryIds not found' });

  //  const newPost = BlogPost.create({ id, title, content, categoryIds });
  // res.status(201).json({ newPost });
};

module.exports = {
  post,
};