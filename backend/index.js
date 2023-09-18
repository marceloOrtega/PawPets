const express = require('express');
const cors = require('cors');

const router = require('./src/routes');

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(3000, () => {
    console.log("Rodando Tranquilamente nesse computador de 1850")
})