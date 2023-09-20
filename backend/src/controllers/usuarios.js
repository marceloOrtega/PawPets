const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const registrarUsuario = async (req, res) => {  
  try {
    const { nome, cpf, email, senha, nascto, cep, numero, complemento, telefones } = req.body;

    if (!nome || !cpf || !email || !senha || !nascto || !cep || !numero || !complemento || !telefones) {
      return res.status(400).json({ erro: 'Por favor, forneça todos os campos obrigatórios' });
    }

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return res.status(409).json({ erro: 'Este email já está em uso' });
    }

    const saltRounds = 10;
    const hashedSenha = await bcrypt.hash(senha, saltRounds);

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        cpf,
        email,
        senha: hashedSenha,
        nascto,
        cep,
        numero,
        complemento,
        telefones,
      },
    });

    res.status(201).json({ mensagem: 'Usuário registrado com sucesso', usuario: novoUsuario });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
};

const listar = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios).end();
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
      res.json(usuario).end();
    } else {
      res.status(404).json({ erro: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar usuário no banco de dados' });
  }
};

const atualizar = async (req, res) => {
  try {
    const { id, nome, cpf, email, senha, nascto, cep, numero, complemento, telefones } = req.body;

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id: parseInt(id) },
    });

    if (!usuarioExistente) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    const saltRounds = 10;
    const hashedSenha = await bcrypt.hash(senha, saltRounds);

    const usuario = await prisma.usuario.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        cpf,
        email,
        senha: hashedSenha,
        nascto,
        cep,
        numero,
        complemento,
        telefones,
      },
    });

    res.status(202).json({ mensagem: 'Usuário atualizado com sucesso', usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar usuário no banco de dados' });
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

    res.status(202).json({ mensagem: 'Login bem-sucedido', usuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao realizar login' });
  }
};

const deletar = async (req, res) => {
  try {
    const { id } = req.params;

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id: parseInt(id) },
    });

    if (!usuarioExistente) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    await prisma.usuario.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ mensagem: 'Usuário deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao deletar usuário do banco de dados' });
  }
};



module.exports = {
  registrarUsuario,
  listar,
  buscar,
  atualizar,
  login,
  deletar,
};
