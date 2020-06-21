const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");

const usuarioController = {
    
    store: async (req, res) => {
        const {email, password} = req.body;
        const con = new Sequelize(config);
        const hashPassword = bcrypt.hashSync(password, 10);

        const user = await con.query(
            "INSERT INTO usuario (email, password) values (:email, :password)", 
            {
                replacements: {
                    email,
                    password: hashPassword,
                }, 
                type: Sequelize.QueryTypes.INSERT,
            }
        )
        if(!user) {
            return res.render("/", {msg: "Erro ao cadastrar um usuário",})
        }
        return res.redirect("/")
    },
};

module.exports = usuarioController;