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
	console.log("Below is the request!");
    request({
    		url: `http://localhost:3008/approveapplication/${req.params.id}`, 
            type: "PUT",
            data: "Something?",
            error: function(result){
                console.log("Back to work!");
            },
            success: function(result){
                console.log("Success!!");
            }
        }); 
    console.log("^ Above is the request!");
    res.redirect("/Applications_Overview");
}); 

module.exports = router;