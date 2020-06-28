const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const resultadoBuscaController = require('../controllers/resultadoBuscaController');

/* GET home page. */

router.get('/', indexController.index);
router.get('/pacote?destinoCidade=West+Palm+Beach&destinoPais=Estados+Unidos&dataDePartida=2020-06-25&dataDeChegada=2020-06-25', resultadoBuscaController.search);

module.exports = router;