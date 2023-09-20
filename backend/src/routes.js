const express = require('express');
const router = express.Router();

const Usuarios = require('./controllers/usuarios');
const Pets = require('./controllers/pets');
const Vacinas = require('./controllers/vacinas');

router.get('/', (req, res) => { res.json('Sistema Online').end() });
router.post('/registrar', Usuarios.registrarUsuario);
router.get('/usuarios', Usuarios.listar);
router.get('/buscar/:id', Usuarios.buscar);
router.put('/usuarios/atualizar', Usuarios.atualizar);
router.post('/login', Usuarios.login);
router.delete('/usuarios/:id', Usuarios.deletar);

router.get('/pets', Pets.listarPets);
router.get('/pets/buscar/:id', Pets.buscarPet);
router.post('/cadastrar', Pets.cadastrarPet); 
router.put('/atualizar/:id', Pets.atualizarPet);
router.delete('/deletar/:id', Pets.deletarPet); 

router.get('/vacinas', Vacinas.listarVacinas);


module.exports = router;
