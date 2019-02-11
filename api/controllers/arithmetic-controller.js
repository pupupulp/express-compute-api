var mongoose = require('mongoose'),
	Computation = mongoose.model('Computations'),
	formulas = require('../formulas/arithmetic-formulas');

const saveComputation = (result, response) => {
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

	saveComputation(mapResponse(request, operands, result), response);
};

exports.subtract = (request, response) => {
	let operands = request.body,
		result = formulas.subtract(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.multiply = (request, response) => {
	let operands = request.body,
		result = formulas.multiply(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.divide = (request, response) => {
	let operands = request.body,
		result = formulas.divide(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.mod = (request, response) => {
	let operands = request.body,
		result = formulas.mod(operands);

	saveComputation(mapResponse(request, operands, result), response);
};