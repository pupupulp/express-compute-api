var mongoose = require('mongoose'),
	Computation = mongoose.model('Computations');

var saveComputation = (result) => {
	let newComputation = new Computation(result)

	newComputation
		.save((error, computation) => {
			if(error) response.send(error);
			response.json(computation);
		});
};

exports.index = (request, response) => {
	response.json({
		code: 'success',
		message: 'Welcome to Compute API Arithmetic endpoint.'
	})
};

exports.add = (request, response) => {
	let body = request.body,
		a = body.a,
		b = body.b,
		computed = a + b;

	const result = {
		requested_by: request.ip,
		endpoint: request.route.path,
		operands: {
			a: a,
			b: b
		},
		message: 'success',
		result: computed
	};

	response.json(result);
};

exports.subtract = (request, response) => {
	let body = request.body,
		a = body.a,
		b = body.b,
		result = a - b;

	response.json({
		code: 'success',
		result: result
	});
};