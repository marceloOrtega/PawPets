const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const verificarToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }

  try {
    const tokenSemBearer = token.replace('Bearer ', '');
    const decoded = jwt.verify(tokenSemBearer, process.env.SECRET_JWT);
    req.usuario = decoded;
    await prisma.usuario.update({
      where: { id: decoded.id },
      data: { verificado: true },
    });

    next();
  } catch (error) {
    res.status(401).json({ erro: 'Token inválido' });
  }
};

module.exports = verificarToken;