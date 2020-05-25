const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const loginController = {

    logar: (req, res) => {
        res.send(req.body);
    },

    cadastrar: (req, res) => {

        let {email,senha} = req.body;

        senha = bcrypt.hashSync(senha, 10);

        Usuario.cadastrarUsuario(email, senha);

        res.send('Cadastro com sucesso!')
    },
}

module.exports = loginController;