const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const router = express.Router();
const auth = require('../middlewares/auth');
const upload = require("../config/uploads");

//Cadastro get e post
router.get('/lista', cadastroController.index);
router.get('/:id', cadastroController.view)
router.get('/', auth, cadastroController.create);
router.post('/', upload.any(), cadastroController.store);
router.post('/deletar/:id', cadastroController.delete);

//Visualizar Form e Editar pacote
router.get('/editar/:id', cadastroController.formUpdate);
router.put('/editar/:id', cadastroController.update);

module.exports = router;