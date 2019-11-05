var express = require('express');
var router = express.Router();

router.use('/', require('./index'));
router.use('/map', require('./map'));
router.use('/users', require('./users'));

module.exports = router;
