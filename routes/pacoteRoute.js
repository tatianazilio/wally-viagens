const express = require('express');
const pacoteController = require('../controllers/pacoteController');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middlewares/auth');

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
router.get('/ver', /*auth,*/ pacoteController.index);
router.get('/cadastro', pacoteController.visualizarCadastro);
router.post('/cadastro', upload.any(), pacoteController.cadastrarPacote);

module.exports = router;