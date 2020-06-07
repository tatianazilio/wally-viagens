module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    }, {
        tableName: 'usuario',
        timestamps: false
    })

    return Usuario;
}

/*const fs = require('fs');
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

module.exports = Usuario;*/