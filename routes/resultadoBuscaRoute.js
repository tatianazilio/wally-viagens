const express = require('express');
const router = express.Router();
const resultadoBuscaController = require('../controllers/resultadoBuscaController');

/* GET home page. */

router.get('/', resultadoBuscaController.index);

module.exports = router;