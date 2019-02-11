var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000
	bodyParser = require('body-parser'),
	apiController = require('./api/controllers/api-controller'),
	errorController = require('./api/controllers/error-controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiController(app); 
errorController(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);