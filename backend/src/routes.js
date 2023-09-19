const express = require('express');
const router = express.Router();

const Usuarios = require('./controllers/usuarios');

router.get('/', (req, res) => { res.json('Sistema Online').end() });
router.post('/registrar', Usuarios.registrarUsuario);
router.get('/usuarios', Usuarios.listar);
router.get('/buscar/:id', Usuarios.buscar);
router.put('/usuarios/atualizar', Usuarios.atualizar);
router.post('/login', Usuarios.login);
router.delete('/usuarios/:id', Usuarios.deletar);

module.exports = router;