// document.addEventListener("DOMContentLoaded", function () {
//     const progressBar = document.getElementById("progress-bar");
//     const qtdEtapas = 3; // Número total de etapas

//     let etapaAtual = 1; // Começar na primeira etapa

//     // Função para atualizar a barra de progresso e iniciar a animação
//     function updateProgressBar() {
//         const barra = document.getElementById("myBar");
//         if(etapaAtual === 1) {
//             barra.style.width = "33.33%"
//             return
//         }
//         if(etapaAtual === 2) {
//             barra.style.width = "66.6%"
//             return
//         }

//     }

//     // Função para avançar para a próxima etapa
//     function nextStep() {
//         const currentStepElement = document.getElementById("step");
//         etapaAtual = etapaAtual + 1
//         updateProgressBar()

//     }

//     // Função para voltar para a etapa anterior (opcional)
//     function prevStep() {
//         const currentStepElement = document.getElementById("step");

//     }

//     // Iniciar na primeira etapa
//     updateProgressBar();
// });
document.addEventListener("DOMContentLoaded", function () {
  const cadastroForm = document.getElementById("cadastroForm");

  cadastroForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.querySelector('input[name="nome"]').value;
    const nascto = document.querySelector('input[name="nascimento"]').value;
    const cpf = document.querySelector('input[name="cpf"]').value;
    const cep = document.querySelector('input[name="cep"]').value;
    const estado = document.querySelector('input[name="estado"]').value;
    const cidade = document.querySelector('input[name="cidade"]').value;
    const endereco = document.querySelector('input[name="endereco"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const confirmarSenha = document.querySelector('input[name="confirmarSenha"]').value;

    if (!nome || !nascto || !cpf || !cep || !estado || !cidade || !endereco || !telefone || !email || !senha || !confirmarSenha) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          nascto,
          cpf,
          cep,
          estado,
          cidade,
          endereco,
          telefone,
          email,
          senha,
        }),
      });

      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        // Redirecionar ou realizar outra ação desejada após o cadastro bem-sucedido.
      } else {
        const data = await response.json();
        alert(`Erro ao cadastrar usuário: ${data.erro}`);
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.");
    }
  });
});
