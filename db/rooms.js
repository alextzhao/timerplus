var mongo = require('./mongo');

module.exports = {
	addRoom: function (roomData, callback) {
		var room = new mongo.Rooms(roomData);
		room.save(function (error) {
			callback(error);
		});
	}

};