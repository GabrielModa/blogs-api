const { User } = require('../models');
const tokenGenerator = require('../helpers/tokenGenerator');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
 
    const duplicateEmail = await User.findOne({ where: { email } });
     if (duplicateEmail) return res.status(409).json({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
  
    return res.status(201).json({ newUser });
};

 const postLogin = async (req, res) => {
    const { email, password } = req.body;

    const findEmail = await User.findOne({ where: { email } });
    const findPassword = await User.findOne({ where: { password } });

    if (!findEmail || !findPassword) return res.status(400).json({ message: 'Invalid fields' });

    const token = tokenGenerator(findEmail, findPassword);
     return res.status(200).json({ token });
 };

//  const getUsers = assert (req, res) => {
   
//  }

module.exports = {
  postUser,
  postLogin,
};
