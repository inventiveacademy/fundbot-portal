var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    request('http://localhost:3008/applications', function(error, response, body) {
        let applications = JSON.parse(body);
        res.render('applicant_update', { title: 'Applicants Update', applications });
        console.log("Rendering Users Update Page!!!>!@")
    });
});
router.put('/', function(req, res, next){
	request('/applications/:id', function(error, response, body) {
	    let applications = JSON.parse(body);
	    console.log("Happy Update!!!")
	});
})



module.exports = router;
