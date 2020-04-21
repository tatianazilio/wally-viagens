var express = require('express');
var router = express.Router();

/* GET pagamento. */
router.get('/pagamento', (req, res, next) => {
  res.render('pagamento');
});

module.exports = router;

