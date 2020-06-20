const Sequelize = require("sequelize");
const config = require("../config/database");
const bcrypt = require("bcrypt");

const loginController = {

  logar: async (req, res) => {
    const {email, password} = req.body;
    const con = new Sequelize(config);

    const [user] = await con.query(
      "SELECT * FROM usuario WHERE email=:email limit 1",
      {
        replacements: {
          email,
        },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.render("index", {
        msg: "Email ou senha errados!",
      });
    }

    req.session.user = {
      id: user.id,
      email: user.email,
    };

    return res.redirect("/");
  },

  destroy: (req, res) => {
    req.session = undefined;
    return res.redirect("/");
  },
};

module.exports = loginController;
