var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).send("Route maps");
});

/* GET routes. */
router.use('/routes', require('./routes'));

module.exports = router;
