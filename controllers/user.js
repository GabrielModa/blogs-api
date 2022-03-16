const { User } = require('../models');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  console.log(displayName);
  const newUser = await User.create({ displayName, email, password, image });
  
  return res.status(201).json({ newUser });
};

module.exports = {
  postUser,
};