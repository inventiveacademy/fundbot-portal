var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/Payment_History', function(req, res, next) {
	    //request('http://localhost:3001/applicants', function(error, response, body) {
       // let Applicants = JSON.parse(body);
        res.render('Payment_History', { title: '????'});
});

module.exports = router;