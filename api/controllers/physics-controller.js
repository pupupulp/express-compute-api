var mongoose = require('mongoose'),
	Computation = mongoose.model('Computations'),
	formulas = require('../formulas/physics-formulas');

const saveComputation = (response, result) => {
	let newComputation = new Computation(result)

	newComputation
		.save((error, computation) => {
			if(error) response.send(error);
			response.json(computation);
		});
};

const mapToObject = (request, operands, result) => {
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

	saveComputation(response, mapToObject(request, operands, result));
};

exports.momentum = (request, response) => {
	let operands = request.body,
		result = formulas.momentum(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.force = (request, response) => {
	let operands = request.body,
		result = formulas.force(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.impulse = (request, response) => {
	let operands = request.body,
		result = formulas.impulse(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.pressure = (request, response) => {
	let operands = request.body,
		result = formulas.pressure(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.density = (request, response) => {
	let operands = request.body,
		result = formulas.density(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.angularMomentum = (request, response) => {
	let operands = request.body,
		result = formulas.angularMomentum(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.torque = (request, response) => {
	let operands = request.body,
		result = formulas.torque(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.centripetalForce = (request, response) => {
	let operands = request.body,
		result = formulas.centripetalForce(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.centripetalAcceleration = (request, response) => {
	let operands = request.body,
		result = formulas.centripetalAcceleration(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.centerMass = (request, response) => {
	let operands = request.body,
		result = formulas.centerMass(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.reducedMass = (request, response) => {
	let operands = request.body,
		result = formulas.reducedMass(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.work = (request, response) => {
	let operands = request.body,
		result = formulas.work(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.potentialEnergy = (request, response) => {
	let operands = request.body,
		result = formulas.potentialEnergy(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.kineticEnergy = (request, response) => {
	let operands = request.body,
		result = formulas.kineticEnergy(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.power = (request, response) => {
	let operands = request.body,
		result = formulas.power(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.friction = (request, response) => {
	let operands = request.body,
		result = formulas.friction(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.horizontalForce = (request, response) => {
	let operands = request.body,
		result = formulas.horizontalForce(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.momentInertia = (request, response) => {
	let operands = request.body,
		result = formulas.momentInertia(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.gravity = (request, response) => {
	let operands = request.body,
		result = formulas.gravity(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.projectileHeight = (request, response) => {
	let operands = request.body,
		result = formulas.projectileHeight(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.projectileRange = (request, response) => {
	let operands = request.body,
		result = formulas.projectileRange(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.simplePendulum = (request, response) => {
	let operands = request.body,
		result = formulas.simplePendulum(operands);

	saveComputation(response, mapToObject(request, operands, result));
};

exports.conicalPendulum = (request, response) => {
	let operands = request.body,
		result = formulas.conicalPendulum(operands);

	saveComputation(response, mapToObject(request, operands, result));
};






