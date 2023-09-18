const $ = (elemento) => document.querySelector(elemento);

$("#cadastro").addEventListener("click", (ev) => {
  ev.preventDefault();

  const nome = $("#nome").value;
  const email = $("#email").value;
  const login = $("#login").value;
  const senha = $("#senha").value;
  const confirmaSenha = $("#confirma-senha").value;

  const senhaConfirmada = senha === confirmaSenha;

  if (!senhaConfirmada) {
    alert("Sua confirmação de senha não confere.\nPor favor, verifique.");
    return;
  }

  const camposPreenchidos =
    nome.trim() !== "" &&
    email.trim() !== "" &&
    login.trim() !== "" &&
    senha.trim() !== "" &&
    confirmaSenha.trim() !== "";

  if (!camposPreenchidos) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }

  const usuarioCadastrado = {
    email,
    nome,
    login,
    senha,
  };

  const string = JSON.stringify(usuarioCadastrado);
  localStorage.setItem("usuarioCadastrado", string);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "./login.html";
});
