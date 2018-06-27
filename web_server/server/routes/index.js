var express = require('express');
var path = require('path');
var router = express.Router();
var logger = require('../Logger');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '../../client/build/')});
});

module.exports = router;
