const express = require('express');

const route = express.Router();
const loginController = require('../controllers/loginController');

route.post("/loginusuario", loginController.logar);

module.exports = route;