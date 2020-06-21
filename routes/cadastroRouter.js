const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const router = express.Router();
const auth = require('../middlewares/auth');
const upload = require("../config/uploads");

//Cadastro get e post
router.get('/lista', /*auth,*/ cadastroController.index);
router.get('/', cadastroController.create);
router.post('/', upload.any(), cadastroController.store);
router.post('/deletar/:id', cadastroController.delete);

module.exports = router;