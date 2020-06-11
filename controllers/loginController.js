const Usuario = require('../controllers/usuarioController');
const bcrypt = require('bcrypt');
const loginController = {

    verLogin: (req, res) => {
        return res.render("")
    },

    logar: (req, res) => {

        const {email, senha} = req.body;

        const usuarioSalvo = Usuario.buscarUsuario(email)
        
        if(!usuarioSalvo) {
            return res.render("", {mensagem:"Email ou senha inválidos!"})

        }

        if(!bcrypt.compareSync(senha, usuarioSalvo.senha)) {
            return res.render("", {mensagem:"Email ou senha inválidos!"})
        }

        res.send("Usuario logado")

    },

    verCadastro: (req, res) => {
        return res.render("")
    },

    cadastrar: (req, res) => {

        let {email,senha} = req.body;

        senha = bcrypt.hashSync(senha, 10);

        Usuario.cadastrarUsuario(email, senha);

        return res.redirect('/')
    },
}

module.exports = loginController;