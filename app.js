var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');

var Login = require('./routes/login');
var logout = require('./routes/logout');
var loginError = require('./routes/login-error');
var password_reset = require('./routes/password_reset');
var password_sent = require('./routes/password_sent');
var users_create = require('./routes/users_create');
var user_update = require('./routes/user_update');
var user_details = require('./routes/user_details');
var users_list = require('./routes/users_list');
var applicant_create = require('./routes/applicant_create');
var applicant_update = require('./routes/applicant_update');
var applicant_details = require('./routes/applicant_details');
var applicants_list = require('./routes/applicants_list')
var loginError = require('./routes/login-error');
var Account_Summary = require('./routes/Account_Summary');
var Payment_History = require('./routes/Payment_History');
var Application_Status = require('./routes/Application_Status');
var Profile_Management = require('./routes/Profile_Management');
var profileManagementAdmin = require('./routes/profile-management-admin');
var Payment_Configuration = require('./routes/Payment_Configuration');
var Applications_Overview = require('./routes/Applications_Overview');
var help = require('./routes/help');

var app = express();
//mongodb connection
// var mongodbUri='mongodb://localhost:27017/fundbot'
var mongodbUri = 'mongodb://team2:inventive@ds161443.mlab.com:61443/fundbot';
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri, { useMongoClient: true });
let db = mongoose.connection;
//mongo error
db.on('error', console.error.bind(console, 'connection error:'));

// Once the DB opens, event listener fires a success message so we don't go crazy
db.once("open", function(){
	console.log('The database connection is successful! 💩');
});

app.use(session({
  cookieNamie: 'session',
  resave: true,
  saveUninitialized: false,
  secret: 'random secret',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));

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
app.use('/logout', logout);
app.use('/login-error', loginError);
app.use('/password_reset', password_reset);
app.use('/password_sent' , password_sent);
app.use('/users_create', users_create);
app.use('/user_update', user_update);
app.use('/user_details', user_details);
app.use('/users_list', users_list);
app.use('/applicant_create', applicant_create);
app.use('/applicant_update', applicant_update);
app.use('/applicant_details', applicant_details);
app.use('/applicants_list', applicants_list);
app.use('/Account_Summary', Account_Summary);
app.use('/Payment_History', Payment_History);
app.use('/Application_Status', Application_Status);
app.use('/Profile_Management', Profile_Management);
app.use('/profile-management-admin', profileManagementAdmin);
app.use('/Payment_Configuration', Payment_Configuration);
app.use('/Applications_Overview', Applications_Overview)
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
