var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// TODO: How do I create another room????
	res.render('timer-view', { title: 'CIS 320 final' })
	//res.send('Welcome to the users page!');
});

module.exports = router;
