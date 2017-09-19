var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session);
    console.log("session userId", req.session.applicantId);
    if (!req.session.applicantId) {
        var err = new Error('You are not authorized to view this page.');
        err.status = 403;
        return next(err);
    } else {
        request('http://localhost:3008/applications', function(error, response, body) {
            let applications = JSON.parse(body);
            console.log(applications)

            //let appl = JSON.parse(body)[0];
            req.session.applicantId = appl._id;
            res.render('Applications_Overview', { title: 'Applications Overview', appl });
        });
    }
});

module.exports = router;