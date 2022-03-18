const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(400).json({ error: 'Invalid fields' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.tokenData = decoded.data;

    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next(error);
  }
};