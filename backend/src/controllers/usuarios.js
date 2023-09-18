const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

// ... outras importações

// Rota de registro de usuário
const registrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const saltRounds = 10;
    const hashedSenha = await bcrypt.hash(senha, saltRounds);

    // Agora, você pode usar o 'hashedSenha' para salvar no banco de dados
    // Implemente a lógica de inserção no banco de dados aqui

    res.status(201).json({ mensagem: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ mensagem: 'Erro no servidor' });
  }
};
// ...

const listar = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios).end();
  } catch (error) {
    console.error(error);
    res.status(500).json('Erro ao buscar usuários no banco de dados.').end();
  }
};

const buscar = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({ where: { id: parseInt(id) } });
    if (usuario) {
      res.json(usuario).end();
    } else {
      res.status(404).json('Usuário não encontrado.').end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Erro ao buscar usuário no banco de dados.').end();
  }
};

const atualizar = async (req, res) => {
  try {
    const { id, nome, email, senha } = req.body;
    const usuario = await prisma.usuario.update({
      where: { id: parseInt(id) },
      data: { nome, email, senha },
    });
    res.status(202).end();
  } catch (error) {
    console.error(error);
    res.status(500).json('Erro ao atualizar usuário no banco de dados.').end();
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await prisma.usuario.findFirst({
      where: { email, senha },
    });
    if (usuario) {
      res.status(202).json(usuario).end();
    } else {
      res.status(404).json('Usuário não encontrado.').end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Erro ao realizar login.').end();
  }
};

module.exports = {
  listar,
  buscar,
  atualizar,
  login,
  registrarUsuario,
};
