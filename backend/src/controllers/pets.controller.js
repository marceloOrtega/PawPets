const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarPets = async (req, res) => {
  try {
    const pets = await prisma.pet.findMany();
    res.json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar pets no banco de dados' });
  }
};

const buscarPet = async (req, res) => {
  try {
    const { id } = req.params;

    const pet = await prisma.pet.findUnique({
      where: { id: parseInt(id) },
    });

    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ erro: 'Pet não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar pet no banco de dados' });
  }
};

const cadastrarPet = async (req, res) => {
  try {
    const { nome, especie, raca, idade, usuarioId } = req.body;

    const novoPet = await prisma.pet.create({
      data: {
        nome,
        especie,
        raca,
        idade,
        usuarioId,
      },
    });

    res.status(201).json({ mensagem: 'Pet cadastrado com sucesso', pet: novoPet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao cadastrar pet no banco de dados' });
  }
};

const atualizarPet = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, especie, raca, idade, usuarioId } = req.body;

    const petAtualizado = await prisma.pet.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome,
        especie,
        raca,
        idade,
        usuarioId,
      },
    });

    res.json({ mensagem: 'Pet atualizado com sucesso', pet: petAtualizado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar pet no banco de dados' });
  }
};

const deletarPet = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.pet.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json({ mensagem: 'Pet deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao deletar pet no banco de dados' });
  }
};

module.exports = {
  listarPets,
  buscarPet,
  cadastrarPet,
  atualizarPet,
  deletarPet,
};