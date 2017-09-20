var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
    request(`http://localhost:3008/applications/${req.params.id}`, function(error, response, body) {
        let applications = JSON.parse(body);
        console.log(applications)
        res.render('user_details', { title: 'user details', applications});
    });
});


module.exports = router;
