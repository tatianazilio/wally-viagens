const express = require('express');
const router = express.Router();
const sucessoController = require("../controllers/sucessoController")

router.get("/", sucessoController.create);
router.post("/", sucessoController.logar);

module.exports = router;