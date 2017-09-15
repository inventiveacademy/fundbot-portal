var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (!req.session.userId) {
        var err = new Error('You are not authorized to view this page.');
        err.status = 403;
        return next(err);
    } else {
        request('http://localhost:3008/applications', function(error, response, body) {
            let applications = JSON.parse(body);
            res.render('Account_Summary', { title: 'Account Summary', applications });
        });
    }
});


module.exports = router;
