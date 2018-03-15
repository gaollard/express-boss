var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('./db/mongodb');
var socketIo = require('socket.io');
var chatSchema = require('./schema/chat');

// routes
var index = require('./routes/index');
var users = require('./routes/users');
var oauth = require('./routes/oauth');
var upload = require('./routes/upload');
var chat = require('./routes/chat');
var clear = require('./routes/clear');
var company = require('./routes/company');
var job = require('./routes/job');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/oauth', oauth);
app.use('/users', users);
app.use('/upload', upload);
app.use('/chat', chat);
app.use('/clear', clear);
app.use('/company', company);
app.use('/job', job);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  console.log(err);
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
