const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
 // Importe o objeto Prisma

const verificarToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }

  try {
    const tokenSemBearer = token.replace('Bearer ', '');
    const decoded = jwt.verify(tokenSemBearer, process.env.SECRET_JWT);

    // O usuário autenticado está disponível em req.usuario
    req.usuario = decoded;

    // Agora, você pode atualizar o campo 'verificado' no banco de dados para true
    // Certifique-se de que o nome do campo no banco de dados corresponda ao nome no seu modelo Prisma (no caso, 'verificado')
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
