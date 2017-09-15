// var session = require('express-session');
// var mongoStore = require('connect-mongo')(session);
// var mongoose = require('mongoose');

// var mongodbUri='mongodb://team2:inventive@ds161443.mlab.com:61443/fundbot'
// mongoose.connect(mongodbUri, { useMongoClient: true })

// //route for sessions
// // var port = 3004;

// // app.listen(port, function() {
// //   console.log('listening on port ' + port + '.')
// // });

// //use sessions for tracking logins
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: 'Sean and Ron are better than Scott',
//   store: new mongoStore({
//     mongooseConnection: mongoose.connection,
//     collection: 'sessions' // default
//   })
// }));


// function getApplications(req, res, next) {
//     console.log("get: all");
//     req.session.user='ronr'  
//     var hour = 3600000
//     req.session.cookie.expires = new Date(Date.now() + hour) 
//     var newhash = gethash(mypwd)
//     console.log("newhash:"+newhash)
//     console.log(req.session.user);
//     res.send(newhash)
// }

// function gethash (pwd) {
//   bcrypt.hash(pwd, saltRounds, function(err, hash) {
//     console.log(hash)
//     return hash
//   });
// }




