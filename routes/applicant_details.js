var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
    request(`http://localhost:3008/applications/${req.params.id}`, function(error, response, body) {
        let application = JSON.parse(body);
        res.render('applicant_details', { title: 'applicants details', application});
    });
});


module.exports = router;