var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    request('http://localhost:3008/applications', function(error, response, body) {
      console.log(request);
        let applications = JSON.parse(body);
        console.log("First get req")

        res.render('Login', { title: 'Login', applications });
    });
});

/* POST login page. */

router.post('/', function(req, res, next) {

    request({url: `http://localhost:3008/login?user=${req.body.email}&pwd=${req.body.password}`, method: "POST"}, function(error, response, body) {
        let success = JSON.parse(body);
        let applicant;



        if (success.user === req.body.email) {


                request({url: `http://localhost:3008/applications-search?email=${req.body.email}`, method: "GET"}, function(err, resp, application) {
     				applicant = JSON.parse(application);
     				let appl = applicant[0]

                    res.render('Profile_Management', { title: 'Profile', appl });
                });

        }


    });

});


module.exports = router;
