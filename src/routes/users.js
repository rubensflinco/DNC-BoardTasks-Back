var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource 50 var:'+process.env.TEST);
});

module.exports = router;
