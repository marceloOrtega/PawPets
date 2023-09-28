document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const qtdEtapas = 3; // Número total de etapas

    let etapaAtual = 1; // Começar na primeira etapa

    // Função para atualizar a barra de progresso e iniciar a animação
    function updateProgressBar() {
        const barra = document.getElementById("myBar");
        if(etapaAtual === 1) {
            barra.style.width = "33.33%"
            return
        }
        if(etapaAtual === 2) {
            barra.style.width = "66.6%"
            return
        }
        
    }

    // Função para avançar para a próxima etapa
    function nextStep() {
        const currentStepElement = document.getElementById("step");
        etapaAtual = etapaAtual + 1
        updateProgressBar()
        
    }

    // Função para voltar para a etapa anterior (opcional)
    function prevStep() {
        const currentStepElement = document.getElementById("step");
        
    }

    // Iniciar na primeira etapa
    updateProgressBar();
});
