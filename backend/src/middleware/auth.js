// auth.js
const jwt = require('jsonwebtoken');

const SECRET_KEY = '*0//*-r+laksffudihhf'; // Substitua pela sua chave secreta real

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expira em 1 hora
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

module.exports = { createToken, verifyToken };
