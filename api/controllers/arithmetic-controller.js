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
		message: 'success',
		endpoint: request.path,
		operands: {
			a: a,
			b: b
		},
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.subtract = (request, response) => {
	let body = request.body,
		a = body.a,
		b = body.b,
		computed = a - b;

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: {
			a: a,
			b: b
		},
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.multiply = (request, response) => {
	let body = request.body,
		a = body.a,
		b = body.b,
		computed = a * b;

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: {
			a: a,
			b: b
		},
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.divide = (request, response) => {
	let body = request.body,
		a = body.a,
		b = body.b,
		computed = a / b;

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: {
			a: a,
			b: b
		},
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.mod = (request, response) => {
	let body = request.body,
		a = body.a,
		b = body.b,
		computed = a % b;

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: {
			a: a,
			b: b
		},
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};