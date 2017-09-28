var express = require('express'); 
var request = require('request'); 
var app = express(); 
var router = express.Router(); 
var session = require('express-session'); 
var mongoStore = require('connect-mongo')(session); 
var mongoose = require('mongoose'); 
var mid = require('../middleware'); 
 
/* GET home page. */ 
router.get('/:id', function(req, res, next) { 
	// console.log("testing approve button!", req.body);
	// console.log(req.params);
 //    request({
 //    		url: `http://localhost:3008/approveapplication/${req.params.id}`, 
 //            type: "PUT",            
 //            error: function(result){
 //                console.log("Nooo💀️!!");
 //            },
 //            success: function(result){
 //                console.log("Success!!");
 //            }
 //        }); 
    res.redirect("/Applications_Overview"); 
}); 


module.exports = router; 