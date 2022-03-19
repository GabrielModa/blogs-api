const { Category } = require('../models');

const postCategory = async (req, res) => {
  const { name } = req.body;
  
 const newCategory = await Category.create({ name });
 if (!newCategory) return res.status(400);
  return res.status(201).json(newCategory);
};

module.exports = {
  postCategory,
};