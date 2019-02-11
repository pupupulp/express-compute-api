var mongoose = require('mongoose'),
	Computation = mongoose.model('Computations'),
	formulas = require('../formulas/physics-formulas');

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
		message: 'Welcome to Compute API Physics endpoint.'
	})
};

exports.kinematicalMotion = (request, response) => {
	let operands = request.body,
		computed = formulas.kinematicalMotion(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};