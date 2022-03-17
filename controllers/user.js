const { User } = require('../models');
const userSchema = require('../schemas/userSchema');
const loginSchema = require('../schemas/loginSchema');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
 
   const { error } = userSchema.validate(req.body);
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }  

    const duplicateEmail = await User.findOne({ where: { email } });
     if (duplicateEmail) return res.status(409).json({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
  
    return res.status(201).json({ newUser });
};

 const postLogin = async (req, res) => {
    const { email, password } = req.body;
      
    const { error } = loginSchema.validate(req.body);
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }
    const findEmail = await User.findOne({ where: { email } });
    const findPassword = await User.findOne({ where: { password } });

    if (!findEmail || !findPassword) return res.status(400).json({ message:'Invalid fields' });
 };

module.exports = {
  postUser,
  postLogin,
};
