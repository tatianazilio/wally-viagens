var express = require('express');
var router = express.Router();

/* GET destino. */
router.get('/', (req, res) => {
  res.render('destino');
});

module.exports = router;
