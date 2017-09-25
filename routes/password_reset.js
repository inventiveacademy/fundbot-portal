var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
/* GET home page. */ 
router.get('/', function(req, res, next) { 
    request('/sendemail', function(error, response, body) { 
        let applications = JSON.parse(body); 
        console.log("Is this working??"); 
    }); 
}); 
 

router.get('/', function(req, res, next) { 
    request('http://localhost:3008/sendemail', function(error, response, body) { 
        res.render('password_reset', { title: 'Password Reset' }); 
    }); 
}); 
 
 
module.exports = router;