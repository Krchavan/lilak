// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // Same secret key used to sign the token

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};

module.exports = verifyToken;
