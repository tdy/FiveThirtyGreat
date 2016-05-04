var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FiveThirtyGreat', start: req.query.start, end: req.query.end});
});

module.exports = router;
