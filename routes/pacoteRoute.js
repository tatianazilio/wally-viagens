const express = require('express');
const pacoteController = require('../controllers/pacoteController');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middlewares/auth');
const upload = require("../config/uploads");

//Cadastro get e post
router.get('/ver', /*auth,*/ pacoteController.index);
router.get('/cadastro', pacoteController.create);
router.post('/cadastro', upload.any(), pacoteController.store);
router.delete('/deletar/:id', pacoteController.delete);

module.exports = router;