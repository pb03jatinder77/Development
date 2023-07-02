var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  let baseUrl = path.join(__dirname, '../public');
  res.render('index',{baseUrl});
});

module.exports = router;
