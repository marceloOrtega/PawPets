document.addEventListener("DOMContentLoaded", () => {
  const vaccineList = document.getElementById("vaccine-list");

  // Faça uma requisição AJAX para obter as vacinas do seu backend (Node.js com Prisma).
  fetch("http://localhost:3000/vacinas")
     .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                vaccineList.innerHTML = "<p>Nenhuma vacina encontrada.</p>";
            } else {
                const vaccineItems = data.map(vaccine => `
                    <div class="vaccine-item">
                        <h3>${vaccine.nome}</h3>
                        <p>Descrição: ${vaccine.descricao}</p>
                        <p>Idade Recomendada: ${vaccine.idadeRecomendada} semanas</p>
                    </div>
                `).join("");

                vaccineList.innerHTML = vaccineItems;
            }
        })
        .catch(error => {
            console.error("Erro ao obter as vacinas:", error);
            vaccineList.innerHTML = "<p>Ocorreu um erro ao carregar as vacinas.</p>";
        });
});