const express = require('express');
const router = express.Router();
const newsletterController  = require('../controllers/newsletterController')

/* POST newsteller. */
router.post("/", newsletterController.store);

module.exports = router;