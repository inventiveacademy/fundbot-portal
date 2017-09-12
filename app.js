var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var Login = require('./routes/Login');
var Account_Summary = require('./routes/Account_Summary');
var Payment_History = require('./routes/Payment_History');
var Application_Status = require('./routes/Application_Status');
var Profile_Management = require('./routes/Profile_Management');
var Payment_Configuration = require('./routes/Payment_Configuration');
var help = require('./routes/help');

// Don't forget to make sure that both express and the API are running before you start express \\

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(body());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/Login', Login);
app.use('/Account_Summary', Account_Summary);
app.use('/Payment_History', Payment_History);
app.use('/Application_Status', Application_Status);
app.use('/Profile_Management', Profile_Management);
app.use('/Payment_Configuration', Payment_Configuration);
app.use('/help', help);


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
// Test
