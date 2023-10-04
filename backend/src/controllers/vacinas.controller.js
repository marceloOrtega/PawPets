const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarVacinas = async (req, res) => {
  try {
    const vacinas = await prisma.vacina.findMany();
    res.json(vacinas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar vacinas no banco de dados' });
  }
};

module.exports = {
  listarVacinas,
};