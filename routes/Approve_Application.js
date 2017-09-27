var express = require('express'); 
var request = require('request'); 
var app = express(); 
var router = express.Router(); 
var session = require('express-session'); 
var mongoStore = require('connect-mongo')(session); 
var mongoose = require('mongoose'); 
var mid = require('../middleware'); 
 
/* GET home page. */ 
router.get('/', function(req, res, next) { 
    request('/approveapplication/:id', function(error, response, body) { 
        console.log("Called Ron's api Approve application function!");
    }); 
    res.redirect("/login"); 
}); 
module.exports = router; 