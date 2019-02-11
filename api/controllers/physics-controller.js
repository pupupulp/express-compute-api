var mongoose = require('mongoose'),
	Computation = mongoose.model('Computations'),
	formulas = require('../formulas/physics-formulas');

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
		message: 'Welcome to Compute API Physics endpoint.'
	})
};

exports.kinematicalMotion = (request, response) => {
	let operands = request.body,
		result = formulas.kinematicalMotion(operands);

	response.json(mapResponse(request, operands, result));
};

exports.momentum = (request, response) => {
	let operands = request.body,
		result = formulas.momentum(operands);

	response.json(mapResponse(request, operands, result));
};

exports.force = (request, response) => {
	let operands = request.body,
		result = formulas.force(operands);

	response.json(mapResponse(request, operands, result));
};

exports.impulse = (request, response) => {
	let operands = request.body,
		result = formulas.impulse(operands);

	response.json(mapResponse(request, operands, result));
};

exports.pressure = (request, response) => {
	let operands = request.body,
		result = formulas.pressure(operands);

	response.json(mapResponse(request, operands, result));
};

exports.density = (request, response) => {
	let operands = request.body,
		result = formulas.density(operands);

	response.json(mapResponse(request, operands, result));
};

exports.angularMomentum = (request, response) => {
	let operands = request.body,
		result = formulas.angularMomentum(operands);

	response.json(mapResponse(request, operands, result));
};

exports.torque = (request, response) => {
	let operands = request.body,
		result = formulas.torque(operands);

	response.json(mapResponse(request, operands, result));
};

exports.centripetalForce = (request, response) => {
	let operands = request.body,
		result = formulas.centripetalForce(operands);

	response.json(mapResponse(request, operands, result));
};

exports.centripetalAcceleration = (request, response) => {
	let operands = request.body,
		result = formulas.centripetalAcceleration(operands);

	response.json(mapResponse(request, operands, result));
};

exports.centerMass = (request, response) => {
	let operands = request.body,
		result = formulas.centerMass(operands);

	response.json(mapResponse(request, operands, result));
};

exports.reducedMass = (request, response) => {
	let operands = request.body,
		result = formulas.reducedMass(operands);

	response.json(mapResponse(request, operands, result));
};

exports.work = (request, response) => {
	let operands = request.body,
		result = formulas.work(operands);

	response.json(mapResponse(request, operands, result));
};

exports.potentialEnergy = (request, response) => {
	let operands = request.body,
		result = formulas.potentialEnergy(operands);

	response.json(mapResponse(request, operands, result));
};

exports.kineticEnergy = (request, response) => {
	let operands = request.body,
		result = formulas.kineticEnergy(operands);

	response.json(mapResponse(request, operands, result));
};

