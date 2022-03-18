const jwt = require('jsonwebtoken');

module.exports = async (req, res, _next) => {
    const token = req.header.authorization;

    if (!token) return res.status(401).json({ error: 'Token not found' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.token = decoded.data;

    return decoded;
};