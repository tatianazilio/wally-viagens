const express = require('express');
const router = express.Router();

/* GET pagamento. */
router.get('/', (req, res) => {
  res.render('pagamento');
});

router.get('/concluido', (req, res) => {
  res.render('pag-concluido');
});

module.exports = router;
