const express = require('express');
const PacoteController = require('../controllers/PacoteController');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//Configurando o upload de arquivos via multer
const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, path.join('public', 'images', 'uploads'));
    },
    filename: function (_req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });


//Cadastro get e post
router.get('/cadastro', PacoteController.viewForm);
router.post('/cadastro', upload.any(), PacoteController.cadastrarPacote);

module.exports = router;