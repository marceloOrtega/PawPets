const express = require('express');
const router = express.Router();

const Usuarios = require('./controllers/usuarios');
const Pets = require('./controllers/pets');
const Vacinas = require('./controllers/vacinas');

router.get('/', (req, res) => { res.json('Sistema Online').end() });

router.post('/registrar', Usuarios.cadastrar);
router.get('/usuarios', Usuarios.listar);
router.get('/buscar/:id', Usuarios.buscar);
router.post('/login', Usuarios.login);

router.get('/pets', Pets.listarPets);
router.get('/pets/buscar/:id', Pets.buscarPet);
router.post('/cadastrar', Pets.cadastrarPet); 
router.put('/atualizar/:id', Pets.atualizarPet);
router.delete('/deletar/:id', Pets.deletarPet); 

router.get('/vacinas', Vacinas.listarVacinas);


module.exports = router;
