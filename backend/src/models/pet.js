const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Pet {
  constructor(pet) {
    this.id = pet.id;
    this.nome = pet.nome;
    this.especie = pet.especie;
    this.raca = pet.raca;
    this.idade = pet.idade;
    this.usuarioId = pet.usuarioId;
  }

  static async buscarPetPorId(id) {
    return await prisma.pet.findUnique({
      where: { id },
    });
  }

  static async listarPetsPorUsuarioId(usuarioId) {
    return await prisma.pet.findMany({
      where: { usuarioId },
    });
  }

  static async criarNovoPet(pet) {
    return await prisma.pet.create({
      data: {
        nome: pet.nome,
        especie: pet.especie,
        raca: pet.raca,
        idade: pet.idade,
        usuarioId: pet.usuarioId,
      },
    });
  }
}

module.exports = Pet;
