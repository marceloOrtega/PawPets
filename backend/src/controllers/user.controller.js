const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const services = require('../services/auth.service'); 
const prisma = new PrismaClient();

const cadastrar = async (req, res) => {
  try {
    const { nome, cpf, cep, rua, numero, complemento, estado, cidade, bairro, telefone, email, senha } = req.body;

    if (!nome || !cpf || !cep || !rua || !numero || !estado || !cidade || !bairro || !telefone || !email || !senha) {
      return res.status(400).json({ erro: 'Por favor, forneça todos os campos obrigatórios' });
    }

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { cpf },
    });

    if (usuarioExistente) {
      return res.status(409).json({ erro: 'Este CPF já está em uso' });
    }

    const saltRounds = 10;
    const hashedSenha = await bcrypt.hash(senha, saltRounds);

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        cpf,
        cep,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        bairro,
        telefone,
        email,
        senha: hashedSenha,
      },
    });

    res.status(201).json({ mensagem: 'Usuário registrado com sucesso', usuario: novoUsuario });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ erro: 'Erro interno do servidor ao registrar usuário', detalhes: error.message });
  }
};


const listar = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar usuários no banco de dados' });
  }
};

const buscar = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({ where: { id: parseInt(id) } });
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ erro: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar usuário no banco de dados' });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await prisma.usuario.findFirst({
      where: { email },
    });

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    
    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    const validation = true;

    if (!validation) {
      return res.status(401).json({ erro: 'Validação falhou' });
    }

    const token = services.createtoken(usuario.id);

    res.status(200).json({ token, validation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao realizar login' });
  }
};
 



module.exports = {
  cadastrar,
  listar,
  buscar,
  login,
};