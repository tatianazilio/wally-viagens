const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");

const sucessoController = {

  create: (req, res) => res.render("auth/sucesso", { usuario:req.session.usuario }),

  logar: async (req, res) => {

    const con = new Sequelize(config);

    if (email !== "" && password !== "") {
      const [user] = await con.query(
        "SELECT * FROM usuario WHERE email=:email limit 1", {
          replacements: {
            email,
          },
          type: Sequelize.QueryTypes.SELECT,
        }
      );

      req.session.user = {
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

  destroy: (req, res) => {
    req.session = undefined;
    return res.redirect("/");
  },
};

module.exports = sucessoController;