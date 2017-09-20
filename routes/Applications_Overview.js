var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session);
    console.log("session userId", typeof(req.session.applicantId));
    if (!req.session.applicantId) {
        var err = new Error('You are not authorized to view this page.');
        err.status = 403;
        return next(err);
    } else {
        request(`http://localhost:3008/applications/`, function(error, response, body) {
            let applications = JSON.parse(body);

            res.render('Applications_Overview', { title: 'Applications Overview', session: req.session, applications  });
        });
    }
});

module.exports = router;