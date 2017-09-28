var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var mid = require('../middleware');
const url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});
/* POST login page. */

router.post('/', function(req, res, next) {
    if (req.body.email && req.body.password) { 
                request({  
                    url: `http://localhost:3008/login?user=${req.body.email}&pwd=${req.body.password}`, 
                    method: "POST", 
                    json: { "user": req.body.email, "pwd": req.body.password} 
        }, function(error, response, body) { 
            let user = body; 
            let applicant; 
                    req.session.isadmin = user.isadmin; 
                    req.session.isuser = user.isuser; 
                    req.session.isapplicant = user.isapplicant; 
                    req.session.applicantId = user._id; 
                    req.session.email = user.user; 
                    req.session.firstname = user.firstname; 
                    req.session.lastname = user.lastname; 
                    req.session.contactphone = user.contactphone; 

            if (user.isadmin || user.isuser) {
                res.redirect("/Applications_Overview");
            } else if (user.user === req.body.email) {
                res.redirect("/Profile_Management");
            } else {
                var err = new Error('User not found.')
                err.status = 401;
                //return callback(err);
                res.redirect('/login-error');
            }
        })
    } else {
        var err = new Error("Email and password are required.");
        err.status = 401;
        //return callback(err);
        res.redirect('/login-error');
    }
})



module.exports = router;