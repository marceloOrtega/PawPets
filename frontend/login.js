const loginBtn = document.querySelector("#entrar");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const storedUserData = localStorage.getItem("usuario");
  
  if (!storedUserData) {
    alert("Usuário não encontrado. Por favor, cadastre-se primeiro.");
    return;
  }

  const usuarioCadastrado = JSON.parse(storedUserData);

  const { login, senha } = usuarioCadastrado;
  const inputLogin = document.querySelector("#login").value;
  const inputSenha = document.querySelector("#senha").value;

  const dadosCorretos = login === inputLogin && senha === inputSenha;

  if (!dadosCorretos) {
    alert("Dados de login incorretos. Por favor, verifique e tente novamente.");
    return;
  }

  window.location.href = "./logado.html";
});
