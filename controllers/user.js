const { User } = require('../models');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
 
    const duplicateEmail = await User.findOne({ where: { email } });
     if (duplicateEmail) return res.status(409).json({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
  
    return res.status(201).json({ newUser });
};

 const getUsers = async (_req, res) => {
     const getAll = await User.findAll({
      attributes: { exclude: ['password'] } });

     res.status(200).json(getAll);
    };

module.exports = {
 postUser,
 getUsers, 
};
