var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var auth = require('./controllers/authController');
var session = require('express-session')

var MONGOOSE_PORT = require('./config').MONGOOSE_PORT;
mongoose.connect('mongodb://localhost:" + MONGOOSE_PORT + "/comment-system');

var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');
var stubData = require('./utils/stubData.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'super secret' }));

// hardcoded user auth
app.use(auth);

app.use('/', routes);
app.use('/api', api);
app.use('/user', users);
app.use('/:username', auth, function(req,res){ res.redirect('/') });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

// create a thread and two users
stubData();

module.exports = app;
