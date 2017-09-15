var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    request('http://localhost:3008/applications', function(error, response, body) {
        let applications = JSON.parse(body);
        res.render('users_list', { title: 'admins list', applications });
    });
});
/*
router.get('/', function(req, res, next) {
    request('http://localhost:3009/admins', function(error, response, body) {
        let applications = JSON.parse(body);
        res.render('users_list', { title: 'admins list', applications });
    });
});
*/

module.exports = router;