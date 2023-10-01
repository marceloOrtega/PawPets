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
  const cepInput = document.querySelector('input[name="cep"]');
  const ruaInput = document.querySelector('input[name="rua"]');
  const numeroInput = document.querySelector('input[name="numero"]');
  const complementoInput = document.querySelector('input[name="complemento"]');
  const estadoInput = document.querySelector('input[name="estado"]');
  const cidadeInput = document.querySelector('input[name="cidade"]');
  const bairroInput = document.querySelector('input[name="bairro"]'); // Modificado de "endereco" para "bairro"
  const telefoneInput = document.querySelector('input[name="telefone"]');
  const emailInput = document.querySelector('input[name="email"]');
  const senhaInput = document.querySelector('input[name="senha"]');
  const confirmarSenhaInput = document.querySelector('input[name="confirmarSenha"]');

  // Função para validar o CEP e preencher os campos
  function validaCEP(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(response => {
          if (!response.erro) {
            ruaInput.value = response.logradouro || "";
            complementoInput.value = response.complemento || "";
            cidadeInput.value = response.localidade || "";
            estadoInput.value = response.uf || "";
            bairroInput.value = response.bairro || "";
            ruaInput.disabled = response.logradouro ? true : false;
            complementoInput.disabled = response.complemento ? true : false;
            cidadeInput.disabled = response.localidade ? true : false;
            estadoInput.disabled = response.uf ? true : false;
            numeroInput.disabled = false;
          } else {
            ruaInput.value = "";
            complementoInput.value = "";
            cidadeInput.value = "";
            estadoInput.value = "";
            bairroInput.value = ""; // Limpar o campo de bairro em caso de erro
          }
          numeroInput.value = "";
        })
        .catch(err => console.error(err));
    }
  }
  

  // Evento para acionar a função quando o CEP perder o foco
  cepInput.addEventListener('blur', () => {
    const cep = cepInput.value;
    validaCEP(cep);
  });

  // Função para validar o CPF
  function validarCPF(cpf) {
    // Remove tudo exceto números
    cpf = cpf.replace(/\D/g, '');

    // Verifica se há 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }

    // Verifica se todos os dígitos são iguais (número inválido, mas pode passar na validação)
    const primeiroDigito = cpf.charAt(0);
    if (cpf.split('').every(digito => digito === primeiroDigito)) {
      return false;
    }

    // Verifica o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador = resto < 2 ? 0 : 11 - resto;
    if (digitoVerificador !== parseInt(cpf.charAt(9))) {
      return false;
    }

    // Verifica o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    digitoVerificador = resto < 2 ? 0 : 11 - resto;
    if (digitoVerificador !== parseInt(cpf.charAt(10))) {
      return false;
    }

    // Se chegou até aqui, é um CPF válido
    return true;
  }

  cadastroForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.querySelector('input[name="nome"]').value;
    const cpf = document.querySelector('input[name="cpf"]').value;
    const cep = document.querySelector('input[name="cep"]').value;
    const rua = ruaInput.value;
    const numero = numeroInput.value;
    const complemento = complementoInput.value;
    const estado = estadoInput.value;
    const cidade = cidadeInput.value;
    const bairro = bairroInput.value; // Modificado de "endereco" para "bairro"
    const telefone = document.querySelector('input[name="telefone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const confirmarSenha = document.querySelector('input[name="confirmarSenha"]').value;

    // Validação de CPF
    if (!validarCPF(cpf)) {
      alert("CPF inválido. Por favor, verifique.");
      return;
    }

    if (!nome || !cpf || !cep || !rua || !numero || !estado || !cidade || !bairro || !telefone || !email || !senha || !confirmarSenha) {
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
