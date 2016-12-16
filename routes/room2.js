var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You have discovered a secret... shhhh... coming soon...');
});

module.exports = router;
