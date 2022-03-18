const { User } = require('../models');
const tokenGenerator = require('../helpers/tokenGenerator');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  
  const userLogin = await User.findOne({ where: { email, password } });  
  const token = tokenGenerator(userLogin);
  
  if (!userLogin) return res.status(400).json({ message: 'Invalid fields' });
   return res.status(200).json({ token });
};

module.exports = {
  postLogin,
};