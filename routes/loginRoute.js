const express = require('express');

const route = express.Router();
const loginController = require('../controllers/loginController');

route.get('/login', loginController.verLogin);

route.post('/login', loginController.logar);

route.get('/cadastro', loginController.verCadastro);

route.post('/cadastro', loginController.cadastrar);

module.exports = route;