var express = require('express');
var router = express.Router();
const realEstateProperties = require('../real_estate_data');

/* GET home page. */
router.get('/',(req, res,) =>{
  res.render('index', { title: 'Real Estate Properties', realEstateProperties: realEstateProperties });
});

module.exports = router;
    