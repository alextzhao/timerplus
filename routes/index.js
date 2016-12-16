var express = require('express');
var router = express.Router();
var mongo = require('../db/mongo');


/* GET home page. */
router.get('/', function(req, res, next) {
	mongo.Rooms.find(function(err, rooms) {
		console.log(rooms);
		res.render('index', { title: 'TimerPlus', rooms: rooms });

	});

	//res.send("homepage, under construction");
});

module.exports = router;
