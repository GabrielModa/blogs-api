const { User } = require('../models');
const schema = require('../schemas/userSchema');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
 
   const { error } = schema.validate(req.body);
    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(code).json({ message });
    }  

    const duplicateEmail = await User.findOne({ where: { email } });
     if (duplicateEmail) return res.status(409).json({ message: 'User already registered' });

    const newUser = await User.create({ displayName, email, password, image });
  
    return res.status(201).json({ newUser });
};

module.exports = {
  postUser,
};
