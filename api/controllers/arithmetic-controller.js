var mongoose = require('mongoose'),
	Computation = mongoose.model('Computations'),
	formulas = require('../formulas/arithmetic-formulas');

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
	let operands = request.body,
		computed = formulas.add(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.subtract = (request, response) => {
	let operands = request.body,
		computed = formulas.subtract(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.multiply = (request, response) => {
	let operands = request.body,
		computed = formulas.multiply(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.divide = (request, response) => {
	let operands = request.body,
		computed = formulas.divide(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.mod = (request, response) => {
	let operands = request.body,
		computed = formulas.mod(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};