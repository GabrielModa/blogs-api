const argon2 = require('argon2');
const { User } = require('../models');
const tokenGenerator = require('../helpers');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
 
    const duplicateEmail = await User.findOne({ where: { email } });
     if (duplicateEmail) return res.status(409).json({ message: 'User already registered' });

     const hash = await argon2.hash(password);

    await User.create({ displayName, email, password: hash, image });    
    const tokenPayload = { displayName, email, image };

    const tokenUser = tokenGenerator.tokenUser(tokenPayload);
  
    return res.status(201).json({ tokenUser });
};

 const getUsers = async (_req, res) => {
     const getAll = await User.findAll({
      attributes: { exclude: ['password'] } });

     res.status(200).json(getAll);
    };

  const getUsersById = async (req, res) => {
      const { id } = req.params;

    const byId = await User.findByPk(id);
    if (!byId) return res.status(404).json({ message: 'User does not exist' });

    res.status(200).json(byId);
  };

module.exports = {
 postUser,
 getUsers,
 getUsersById, 
};
