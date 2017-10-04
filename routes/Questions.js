var express = require('express'); 
var request = require('request'); 
var app = express(); 
var router = express.Router(); 
var session = require('express-session'); 
var mongoStore = require('connect-mongo')(session); 
var mongoose = require('mongoose'); 
var mid = require('../middleware'); 
 
router.get('/', function(req, res, next) { 
	res.render('Questions', { title: 'Questions', session: req.session});
}); 
module.exports = router; 