const express = require('express');
const router = express.Router();

/* GET destino. */
router.get('/', (req, res) => {
  res.render('auth/sucesso');
});

module.exports = router;