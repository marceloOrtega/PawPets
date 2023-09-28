document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
  
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();
  
    
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
  
      const userData = {
        email: email,
        senha: senha,
      };
  
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (response.ok) {
        
          const responseData = await response.json();
          window.localStorage.setItem('token', responseData.token);
          window.location.href = '.html'; 
        } else {
          const errorData = await response.json();
          errorMessage.textContent = errorData.error;
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    });
  });
  