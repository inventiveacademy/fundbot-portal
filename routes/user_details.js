var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

router.get('/:user', function(req, res, next) {
    request(`http://localhost:3008/logins/${req.params.user}`, function(error, response, body) {
        let applications = JSON.parse(body);
        console.log(applications)
        res.render('user_details', { title: 'user details', applications, session: req.session});
    });
});



module.exports = router;
