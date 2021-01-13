var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GitHub Actions HI! __________________________ test 2' });
});

module.exports = router;
