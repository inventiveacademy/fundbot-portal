var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();
/* GET home page. */
router.get('/:id', function(req, res, next){
	request(`http://localhost:3008/applications/${req.params.id}`, function(error, response, body){
		let applications = JSON.parse(body);
		res.render('user_update', { title: 'Users Update', applications, session:req.session});
		console.log("Rendering Users Update Page!!!>!@");
	});
});

router.put('/', function(req, res, next){
	request('/applications/:id', function(error, response, body) {
	    let applications = JSON.parse(body);
	    console.log("Happy Update!!!")
	});
});


module.exports = router;
