const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  // algorithm: 'HS256', (default value)
};

const SECRET = process.env.JWT_SECRET;

module.exports = (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig); 