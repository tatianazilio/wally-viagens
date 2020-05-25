const fs = require('fs');
const path = require('path');

const arquivo = path.join('usuarios.json')

const Usuario = {

    cadastrarUsuario: (email, senha) => {
        const usuariosJson = JSON.parse(fs.readFileSync(arquivo, {
            encoding: 'utf-8'
        }));

        usuariosJson.push({
            email,
            senha,
        });

        fs.writeFileSync(arquivo, JSON.stringify(usuariosJson))
    }
}

module.exports = Usuario;