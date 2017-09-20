var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    request('/sendemail', function(error, response, body) {
        console.log('Howdy, Partner!!');
    });
});

router.get('/', function(req, res, next) {
    res.render('password_reset', { title: 'password_reset' });
});

module.exports = router;