const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API na porta 3000!');
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
