const express = require('express');
const auth = require('../middlewares/auth');

const route = express.Router();
const loginController = require('../controllers/loginController');

route.get("/loginusuario", loginController.create);
route.post("/loginusuario", loginController.logar);
route.get("/logout", loginController.logout);

module.exports = route;