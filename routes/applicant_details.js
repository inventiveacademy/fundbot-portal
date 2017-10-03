var express = require('express');
var request = require('request');
var app = express();

var router = express.Router();
let applicant;
/* GET home page. */
router.get('/:id', function(req, res, next) {
	console.log("Applicant details", req.params);
	applicant = req.params;
    request(`http://localhost:3008/applications/${req.params.id}`, function(error, response, body) {
        let application = JSON.parse(body);
        res.render('applicant_details', { title: 'applicants details', application, session: req.session});
    });
});
 

module.exports = router;