const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");

const loginController = {
  create: (req, res) => res.render("auth/login", {usuario:req.session.usuario}),

  logar: async (req, res) => {
    const {
      email,
      password
    } = req.body;
    const con = new Sequelize(config);

    if (email == "" && password == "") {
      return res.render("auth/login", {
        msg1: "Informe o seu email",
        msg2: "Informe a sua senha", usuario:req.session.usuario
      })
    }

    if (email == "" && password !== "") {
      return res.render("auth/login", {
        msg1: "Informe o seu email", usuario:req.session.usuario
      })
    }

    if (password == "" && email !== "") {
      return res.render("auth/login", {
        msg2: "Informe a sua senha", usuario:req.session.usuario
      })
    }

    if (email !== "" && password !== "") {
      const [user] = await con.query(
        "SELECT * FROM usuario WHERE email=:email limit 1", {
          replacements: {
            email,
          },
          type: Sequelize.QueryTypes.SELECT,
        }
      );

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.render("auth/login", {
          msg3: "Email ou senha errados!",
        });
      }

      req.session.usuario = {
        id: user.id,
        email: user.email,
      };

      if(!req.session.previousUrl) {
        res.redirect("/")
      }else {
        res.redirect(req.session.previousUrl);
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },

  destroy: (req, res) => {
    req.session = undefined;
    return res.redirect("/");
  },
};

module.exports = loginController;