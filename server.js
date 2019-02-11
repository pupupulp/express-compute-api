var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	Computation = require('./api/models/response-model'),
	apiController = require('./api/controllers/api-controller'),
	errorController = require('./api/controllers/error-controller');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/computedb', { useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiController(app); 
errorController(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);