const { User } = require('../models');
// const tokenGenerator = require('../helpers/tokenGenerator');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
 
    const duplicateEmail = await User.findOne({ where: { email } });
     if (duplicateEmail) return res.status(409).json({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
  
    return res.status(201).json({ newUser });
};

//  const getUsers = async (req, res) => {
//      const { id } = req.body;

//      const getAll = await User.findAll({ attributes: { exclude: 'id' } });
//      console.log('consollaum', getAll.User);
//      res.status(200).json({ message: getAll });
//     };

module.exports = {
 postUser, 
};
