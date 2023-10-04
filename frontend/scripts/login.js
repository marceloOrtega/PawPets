const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const senha = senhaInput.value;

  if (!email || !senha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, senha }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro de rede.');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Resposta do servidor:', data);

      if (data.validation === true) {
        // A validação foi bem-sucedida, redirecione para 'home.html'
        window.location.href = 'home.html';
      } else {
        // A validação não foi bem-sucedida, exiba uma mensagem de erro
        alert('A validação não foi bem-sucedida. Por favor, verifique suas credenciais.');
      }
    })
    .catch((error) => {
      console.error('Erro ao realizar login:', error.message);
      alert('Erro ao realizar login. Por favor, tente novamente mais tarde.');
    });
});
