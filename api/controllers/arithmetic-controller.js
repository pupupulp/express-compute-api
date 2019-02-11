var mongoose = require('mongoose'),
	Computation = mongoose.model('Computations'),
	formulas = require('../formulas/arithmetic-formulas');

const saveComputation = (result) => {
	let newComputation = new Computation(result)

	newComputation
		.save((error, computation) => {
			if(error) response.send(error);
			response.json(computation);
		});
};

const mapResponse = (request, operands, result) => {
	return {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: result,
		requested_by: request.ip
	};
}

exports.index = (request, response) => {
	response.json({
		code: 'success',
		message: 'Welcome to Compute API Arithmetic endpoint.'
	})
};

exports.add = (request, response) => {
	let operands = request.body,
		result = formulas.add(operands);

	response.json(mapResponse(request, operands, result));
};

exports.subtract = (request, response) => {
	let operands = request.body,
		result = formulas.subtract(operands);

	response.json(mapResponse(request, operands, result));
};

exports.multiply = (request, response) => {
	let operands = request.body,
		result = formulas.multiply(operands);

	response.json(mapResponse(request, operands, result));
};

exports.divide = (request, response) => {
	let operands = request.body,
		result = formulas.divide(operands);

	response.json(mapResponse(request, operands, result));
};

exports.mod = (request, response) => {
	let operands = request.body,
		result = formulas.mod(operands);

	response.json(mapResponse(request, operands, result));
};