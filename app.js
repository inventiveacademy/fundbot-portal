var restify = require('restify');
var server = restify.createServer();

server.pre(restify.pre.sanitizePath());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

let employees = [{
    "firstname": 'drake'
}]

function getEmployees(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.send(employees);
}

server.get('getEmployees', getEmployees);

server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});