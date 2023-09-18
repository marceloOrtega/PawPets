class Usuario {
    constructor(usuario) {
      this.id = usuario.id;
      this.nome = usuario.nome;
      this.cpf = usuario.cpf;
      this.email = usuario.email;
      this.senha = usuario.senha;
      this.nascto = usuario.nascto;
      this.endereco = {
        cep: usuario.cep,
        numero: usuario.numero,
        complemento: usuario.complemento,
      };
      this.telefones = usuario.telefones;
    }
  
    // Método estático para criar um novo usuário
    static criarNovoUsuario(usuario) {
      return {
        create: {
          nome: usuario.nome,
          cpf: usuario.cpf,
          email: usuario.email,
          senha: usuario.senha,
          nascto: usuario.nascto,
          endereco: {
            create: {
              cep: usuario.cep,
              numero: usuario.numero,
              complemento: usuario.complemento,
            },
          },
          telefones: usuario.telefones,
        },
      };
    }
  }
  
  module.exports = Usuario;
  