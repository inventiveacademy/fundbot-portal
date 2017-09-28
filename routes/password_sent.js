var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) { 
    request({ 
        url: 'http://localhost:3008/sendemail', 
        method: "POST", 
        json: { 
                 "from" : 'fundbot@inventive.io', 
                 "to" : req.body.email, 
                 "subject" : 'Hello! Is this working?', 
                 "text": 'You is Kind, You is Smart, You is Important' 
        }}, 
        function(error, response, body) { 
        console.log("req.params",req.body); 
           
        res.render('password_sent', { title: 'Password Sent'}); 
    });
});
module.exports = router;
