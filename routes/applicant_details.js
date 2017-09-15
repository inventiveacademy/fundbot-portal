var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//this needs to be refacterd to the log in user 
    request('http://localhost:3008/applications', function(error, response, body) {
        let application = JSON.parse(body)[0];
        console.log(application);
        res.render('applicant_details', { title: 'applicants details', application });
    });
});


module.exports = router;
