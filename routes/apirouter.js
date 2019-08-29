var express = require('express');
var router = express.Router();

router.use('/', require('./index'));
router.use('/map', require('./map'));

module.exports = router;
