var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	    //request('http://localhost:3001/applicants', function(error, response, body) {
       // let Applicants = JSON.parse(body);
        res.render('General_Points', { title: '????' /*Applicants */});
});


module.exports = router;