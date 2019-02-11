var mongoose = require('mongoose'),
	Computation = mongoose.model('Computations'),
	formulas = require('../formulas/physics-formulas');

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
		message: 'Welcome to Compute API Physics endpoint.'
	})
};

exports.listComputations = (request, response) => {
	Computation
		.find({ endpoint: request.path }, (error, computations) => {
			if(error) response.send(error);
			response.json(computations);
		})
};

exports.kinematicalMotion = (request, response) => {
	let operands = request.body,
		result = formulas.kinematicalMotion(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.momentum = (request, response) => {
	let operands = request.body,
		result = formulas.momentum(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.force = (request, response) => {
	let operands = request.body,
		result = formulas.force(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.impulse = (request, response) => {
	let operands = request.body,
		result = formulas.impulse(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.pressure = (request, response) => {
	let operands = request.body,
		result = formulas.pressure(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.density = (request, response) => {
	let operands = request.body,
		result = formulas.density(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.angularMomentum = (request, response) => {
	let operands = request.body,
		result = formulas.angularMomentum(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.torque = (request, response) => {
	let operands = request.body,
		result = formulas.torque(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.centripetalForce = (request, response) => {
	let operands = request.body,
		result = formulas.centripetalForce(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.centripetalAcceleration = (request, response) => {
	let operands = request.body,
		result = formulas.centripetalAcceleration(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.centerMass = (request, response) => {
	let operands = request.body,
		result = formulas.centerMass(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.reducedMass = (request, response) => {
	let operands = request.body,
		result = formulas.reducedMass(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.work = (request, response) => {
	let operands = request.body,
		result = formulas.work(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.potentialEnergy = (request, response) => {
	let operands = request.body,
		result = formulas.potentialEnergy(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

exports.kineticEnergy = (request, response) => {
	let operands = request.body,
		result = formulas.kineticEnergy(operands);

	saveComputation(mapResponse(request, operands, result), response);
};

