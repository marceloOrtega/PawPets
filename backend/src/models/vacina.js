const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Vacina {
  constructor(vacina) {
    this.id = vacina.id;
    this.nome = vacina.nome;
    this.descricao = vacina.descricao;
    this.idadeRecomendada = vacina.idadeRecomendada;
    this.petId = vacina.petId;
  }

  static async buscarVacinaPorId(id) {
    return await prisma.vacina.findUnique({
      where: { id },
    });
  }

  static async listarVacinasPorPetId(petId) {
    return await prisma.vacina.findMany({
      where: { petId },
    });
  }
}

module.exports = Vacina;
