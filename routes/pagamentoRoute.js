const express = require('express');
const pagamentoController = require('../controllers/pagamentoController');
const router = express.Router();
const auth = require('../middlewares/auth');
const upload = require("../config/uploads");

/* GET pagamento. */
router.get('/:id', auth, pagamentoController.view)

module.exports = router;
