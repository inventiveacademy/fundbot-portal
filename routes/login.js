var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var mid = require('../middleware');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Login', { title: 'Login' });
});

/* POST login page. */

router.post('/', function(req, res, next) {
    if (req.body.email && req.body.password) {
        request({ url: `http://localhost:3008/login?user=${req.body.email}&pwd=${req.body.password}`, method: "POST", datatype:"json"}, function(error, response, body) {
                let success = JSON.parse(body);
                let applicant;
                console.log(body);
                console.log(success);
                console.log(success.user,req.body.email);

                if (success.user === req.body.email) {
                    request({ url: `http://localhost:3008/applications-search?email=${req.body.email}`, method: "GET" }, function(err, resp, application) {
                        applicant = JSON.parse(application);
                        let appl = applicant[0];
                        console.log(`This is the id! ${appl._id}`);
                        req.session.applicantId = appl._id;
                        res.redirect('/Profile_Management');
                    });
                }
                else {
                    var err = new Error('User not found.')
                    err.status = 401;
                    //return callback(err);
                    res.redirect('/login-error');
                }
            })
    }
    else {
        var err = new Error("Email and password are required.");
        err.status = 401;
        return next(err);
    }
});


module.exports = router;
