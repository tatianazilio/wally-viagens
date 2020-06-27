const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const router = express.Router();
const auth = require('../middlewares/auth');
const upload = require("../config/uploads");
const loginRedirect = require('../middlewares/loginRedirect');

//Cadastro get e post
router.get('/lista', cadastroController.index);
router.get('/:id', loginRedirect, cadastroController.view)
router.get('/', auth, cadastroController.create);
router.post('/', upload.any(), cadastroController.store);
router.delete('/deletar/:id', cadastroController.delete);

//Visualizar Form e Editar pacote
router.get('/editar/:id', cadastroController.formUpdate);
router.put('/editar/:id', upload.any(), cadastroController.update);

module.exports = router;