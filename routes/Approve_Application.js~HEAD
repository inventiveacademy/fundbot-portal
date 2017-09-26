var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   request('/approveapplication/:id', function(error, response, body){
        console.log("Button was clicked!!");
   });
});


module.exports = router;