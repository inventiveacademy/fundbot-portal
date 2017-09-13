var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* Get register page. */
// ✅ GET ROUTE WORKS, tested by scottie.
router.get('/', function(req,res,next){
  res.render('register', { title: 'Register' });
})

/* Post register page */
router.post('/', function(req, res, next){
  //TODO make sure that this matches with the schema
  if(
    req.body.firstname &&
    req.body.middlename &&
    req.body.lastname &&
    req.body.email &&
    req.body.contactphone &&
    req.body.address &&
    req.body.zip &&
    req.body.city &&
    req.body.state &&
    req.body.password &&
    req.body.confirmPassword
  ){
    // confirm that the user typed the same password twice
    if(req.body.password !== req.body.confirmpassword){
      var err = new Error('Passwords do not match');
      err.status = 400;
      return next(err);
    }
    // create object with form input
    // TODO make sure this works with the schema
    var applicantData = {
         firstname: req.body.firstname,
         middlename: req.body.middlename,
         lastname: req.body.lastname,
         email: req.body.email,
         contactphone: req.body.contactphone,
         address: req.body.address,
         zip: req.body.zip,
         city: req.body.city,
         state: req.body.state,
         password: req.body.password,
       };
    // use schema's create method to insert document into MongoStore
    //TODO make sure that the schema model naming is the same as Ron's
    User.create(applicantData, function(error, user) {
      if(error){
        return next(error);
      } else {
        // TODO figure out how the session managment works with ron's api
          res.send('you signed in!');
          // TODO redirect them to their profile here
      }
    });

  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})




module.exports = router;
