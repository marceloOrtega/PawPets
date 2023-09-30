const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const senha = senhaInput.value;

  // Verifique se os campos de email e senha estão preenchidos
  if (!email || !senha) {
    alert('Por favor, preencha todos os campos.');
    return; // Impede a execução da solicitação AJAX
  }

  // Aqui você pode fazer a solicitação AJAX para o backend para verificar o login.
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
      } else if (data.erro === 'Senha incorreta') {
        // Tratar erro de senha incorreta
        alert('Senha incorreta. Por favor, verifique sua senha e tente novamente.');
      } else {
        // Tratar outros erros de login
        console.error('Erro de login:', data.erro);
      }
    })
    .catch((error) => {
      console.error('Erro ao realizar login:', error);
    });
});
