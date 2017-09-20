var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    request('/sendemail', function(error, response, body) {
        let applications = JSON.parse(body);
        console.log("Is this working???")
    });
});


module.exports = router;