const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuarioController")

//Cadastro Usuário Get e Post

router.get("/cadastrousuario", usuarioController.create);
router.post("/cadastrousuario", usuarioController.store);

module.exports = router;
