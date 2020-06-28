const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");

const usuarioController = {

    create: (_req, res) => res.render("auth/cadastro", { usuario:req.session.usuario }),

    store: async (req, res) => {
        const {
            email,
            password
        } = req.body;
        const con = new Sequelize(config);
        const hashPassword = bcrypt.hashSync(password, 10);

        if (email == "" && password == "") {
            return res.render("auth/cadastro", {
                msg1: "O campo email não pode estar vazio!",
                msg2: "O campo senha não pode estar vazio!"
            })
        }

        if (email == "" && password !== "") {
            return res.render("auth/cadastro", {
                msg1: "O campo email não pode estar vazio!"
            })
        }

        if (password == "" && email !== "") {
            return res.render("auth/cadastro", {
                msg2: "O campo senha não pode estar vazio!"
            })
        }

        if (email !== "" && password !== "") {
            const search = await con.query(

                "SELECT * FROM usuario WHERE email=:email limit 1", {
                    replacements: {
                        email,
                    },
                    type: Sequelize.QueryTypes.SELECT,
                }
            );

            if (search == "") {
                const user = await con.query(

                    "INSERT INTO usuario (email, password) values (:email, :password)", {
                        replacements: {
                            email,
                            password: hashPassword,
                        },
                        type: Sequelize.QueryTypes.INSERT,
                    }
                )
                return res.redirect("/sucesso")
            } else {
                return res.render("auth/cadastro", {
                    msg3: "Usuário já cadastrado!",
                });
            }
        };
    }
};

module.exports = usuarioController;