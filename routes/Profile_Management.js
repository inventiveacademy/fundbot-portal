var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩')
    console.log(req.session);
    console.log('💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩')
    request(`http://localhost:3008/applications/${req.session.applicantId}`, function(error, response, body) {
        let appl = JSON.parse(body)[0];
        console.log(appl._id);


        res.render('Profile_Management', { title: 'Profile Management', appl});
    });
});


module.exports = router;
