var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    if (!req.session.applicantId) {
        var err = new Error('You are not authorized to view this page.');
        err.status = 403;
        return next(err);
    } else {
        request('http://localhost:3008/applications', function(error, response, body) {
    
            res.render('Profile_Management', { title: 'Profile_Management', session: req.session });
        });
    }
});

module.exports = router;
