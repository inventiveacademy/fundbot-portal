var express = require('express');
var request = require('request');
var app = express();

var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
    request(`http://localhost:3008/applications/${req.params.id}`, function(error, response, body) {
        let application = JSON.parse(body);
        res.render('applicant_details', { title: 'applicants details', application, session: req.session});
    });
});

router.get('/:id', function(req, res, next) { 
	console.log("testing approve button!", req.body);
	console.log(req.params);
    request({
    		url: `http://localhost:3008/approveapplication/${req.params.id}`, 
            type: "PUT",            
            error: function(result){
                console.log("Nooo💀️!!");
            },
            success: function(result){
                console.log("Success!!");
            }
        }); 
    res.redirect("/Applications_Overview"); 
}); 

module.exports = router;