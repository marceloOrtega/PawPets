document.addEventListener("DOMContentLoaded", function () {
  const cadastroForm = document.getElementById("cadastroForm");
  const cepInput = document.querySelector('input[name="cep"]');
  const ruaInput = document.querySelector('input[name="rua"]');
  const numeroInput = document.querySelector('input[name="numero"]');
  const complementoInput = document.querySelector('input[name="complemento"]');
  const estadoInput = document.querySelector('input[name="estado"]');
  const cidadeInput = document.querySelector('input[name="cidade"]');
  const bairroInput = document.querySelector('input[name="bairro"]');
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
            bairroInput.value = "";
          }
          numeroInput.value = "";
        })
        .catch(err => console.error(err));
    }
  }

  cepInput.addEventListener('blur', () => {
    const cep = cepInput.value;
    validaCEP(cep);
  });

  // Função para validar o CPF
  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
      alert("CPF deve conter 11 dígitos.");
      return false;
    }

    const primeiroDigito = cpf.charAt(0);
    if (cpf.split('').every(digito => digito === primeiroDigito)) {
      alert("CPF inválido. Todos os dígitos são iguais.");
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
      alert("Primeiro dígito verificador do CPF é inválido.");
      return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
      alert("Segundo dígito verificador do CPF é inválido.");
      return false;
    }

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
    const bairro = bairroInput.value; 
    const telefone = document.querySelector('input[name="telefone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
    const confirmarSenha = document.querySelector('input[name="confirmarSenha"]').value;

    if (!validarCPF(cpf)) {
      return; // A validação de CPF já exibiu a mensagem de erro.
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
        // Redirecionar para a página de login após um cadastro bem-sucedido
        window.location.href = "login.html";
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
let stepAtual = 1
const goToStep = (step) => {
  if(stepAtual === 1 && step === 1) return
  if(stepAtual === 2 && step === 2) return
  stepAtual = step
  const tabelaDePreenchimento = document.querySelector("#tabeladepreenchimento")
  const stepsFunctions = {
    1: () => tabelaDePreenchimento.style.animation = 'translateToRight 1s forwards',
    2: () => tabelaDePreenchimento.style.animation = 'translateToLeft 1s forwards'
  }
  stepsFunctions[step]()
}