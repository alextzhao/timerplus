var mongoose = require('mongoose');
// Connection url (we use mongo lab as a cloud mongo db solution)
var uri = "mongodb://admin:admin@ds133358.mlab.com:33358/timerplus";

mongoose.connect(uri, function (err) {
	if (err) {
		throw err;
	} else {
		console.log("DB successfully connected");
	}
});

var db = mongoose.connection;

// schema for a particular room
var roomSchema = new mongoose.Schema({
	roomName: String,
	password: String,
	date: String
});

var Rooms = mongoose.model('Rooms', roomSchema);

module.exports = {
	Rooms: Rooms,
	mongoose: mongoose,
	//TODO: WHAT DO WE DO ABOUT THE COMMENTS????
	roomsCollection: db.collection('Rooms')
};
