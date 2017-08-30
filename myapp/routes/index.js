var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index', { title: 'Admin Server' });
});


module.exports = router;