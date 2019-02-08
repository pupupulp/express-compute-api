var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(request, response) {
	response.status(404).send({ message: 'Endpoint ' + request.originalUrl + ' not found' })
});

var arithmeticEndpoint = require('./api/endpoints/arithmetic-endpoint');
arithmeticEndpoint(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);