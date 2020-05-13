const express = require('express');
const router = express.Router();

/* GET pagamento. */
router.get('/', (req, res) => {
  res.render('pagamento');
});

module.exports = router;

