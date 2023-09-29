const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const senha = senhaInput.value;

  // Aqui você pode fazer uma solicitação AJAX para o backend para verificar o login.
  // Substitua 'URL_DO_BACKEND' pela URL real do seu backend de login.

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, senha }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.mensagem === 'Login bem-sucedido') {
        // Redirecionar ou realizar outras ações após o login bem-sucedido.
        console.log('Login bem-sucedido:', data.usuario);
      } else {
        // Tratar erros de login, como senha incorreta ou usuário não encontrado.
        console.error('Erro de login:', data.erro);
      }
    })
    .catch((error) => {
      console.error('Erro ao realizar login:', error);
    });
});
