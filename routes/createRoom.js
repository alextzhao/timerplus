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
	console.log("received post request from create room")
	// TODO: Here password is stored in plain text!
	var roomData = {
		roomName: req.body.roomName,
		password: req.body.password,

		// Store the time when room is added. Used for sorting.
		date: new Date().getTime()		
	}

	roomsDb.addRoom (roomData, function (err) {
		if (err) {
			next (err);
		} else {
			console.log("a new room " + req.body.roomName + "has been created");
			res.render('createRoomConfirmation', {roomName: req.body.roomName});
		}
	});

});

module.exports = router;