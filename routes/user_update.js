var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

router.get('/:id', function(req, res, next) {
    request(`http://localhost:3008/applications/${req.params.id}`, function(error, response, body) {
        let applications = JSON.parse(body);
        console.log(applications)
        res.render('user_update', { title: 'user update', applications, session: req.session});
    });
});
router.put('/', function(req, res, next){
	request('/applications/:id', function(error, response, body) {
	    let applications = JSON.parse(body);
	    console.log("Happy Update!!!")
	});
})




module.exports = router;
