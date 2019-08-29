var express = require('express');
var router = express.Router();
const maps = require('./Mapa de Ciclorutas Municipio de Medellín - POT 2014-2027 (Acuerdo 48 de 2014).geojson');

const RoutesModel = require('../database/models/Routes');

router.get('/', (req, res) => {
    RoutesModel.getAll((err, data) => {
        if(err) throw err;
        res.status(200).send(data);
    });
});

/**
 * TODO: Add new route
 */
router.get('/add', function(req, res, next) {

});

module.exports = router;
