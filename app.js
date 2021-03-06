/**
 * Note that this project uses the express framework and socket.io
 *
 * This is the server side code.s
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// rountes
var index = require('./routes/index');
var timerplus = require('./routes/timerplus');
var room2 = require('./routes/room2');
var createRoom = require('./routes/createRoom');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// start a socket io instance.
var server = require('http').Server(app);
var io = require('socket.io')(server);


//Mount index to the root
app.use('/', index);
app.use('/', createRoom);

// Mounts tatimer to /tatimer
app.use('/timerplus', timerplus);
// TODO: How to do this automatically in the future? Need to allow
// users to create a new room essentially to start their timer.
app.use('/room2', room2);	


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
