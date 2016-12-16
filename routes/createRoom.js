/**
 *
 * Route for createing a new timer room.
 */

var express = require('express');
var router = express.Router();
var roomsDb = require('../db/rooms');


router.get('/rooms/new', function (req, res, next) {
	res.render('createRoom');
});

router.post('/rooms/new', function (req, res, next) {
	// TODO: Here password is stored in plain text!
	var roomData = {
		roomName: req.body.roomName,
		password: req.body.password
	}

	roomsDb.addRoom (roomData, function (err) {
		if (err) {
			next (err);
		} else {
			res.redirect('/');
			res.send('your timer room' + req.body.roomName +  'has been created.');
		}
	});

});

module.exports = router;