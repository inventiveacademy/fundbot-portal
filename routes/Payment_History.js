var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session);
    console.log("session userId", req.session.applicantId);
    if (!req.session.applicantId) {
        var err = new Error('You are not authorized to view this page.');
        err.status = 403;
        return next(err);
    } else {
        request(`http://localhost:3008/applications/${req.session.applicantId}`, function(error, response, body) {
            let appl = JSON.parse(body);
            // req.session.applicantId = appl._id;
            // console.log("req.query", req.query);
            // console.log("appl ", appl)
            res.render('Payment_History', { title: 'Payment_History', appl, user });
        });
    }
});





module.exports = router;