const express = require('express');
const pacoteController = require('../controllers/pacoteController');
const router = express.Router();

/* GET home page. */

/*Cadastro get e post*/
router.get('/cadastro', pacoteController.cadastrarPacote);

module.exports = router;