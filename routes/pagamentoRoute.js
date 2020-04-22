var express = require('express');
var router = express.Router();

/* GET pagamento. */
router.get('/', (req, res) => {
  res.render('pagamento');
});

module.exports = router;

