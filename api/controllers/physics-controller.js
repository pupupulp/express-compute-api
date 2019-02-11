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

exports.momentum = (request, response) => {
	let operands = request.body,
		computed = formulas.momentum(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.force = (request, response) => {
	let operands = request.body,
		computed = formulas.force(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.impulse = (request, response) => {
	let operands = request.body,
		computed = formulas.impulse(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.pressure = (request, response) => {
	let operands = request.body,
		computed = formulas.pressure(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.density = (request, response) => {
	let operands = request.body,
		computed = formulas.density(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.angularMomentum = (request, response) => {
	let operands = request.body,
		computed = formulas.angularMomentum(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.torque = (request, response) => {
	let operands = request.body,
		computed = formulas.torque(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.centripetalForce = (request, response) => {
	let operands = request.body,
		computed = formulas.centripetalForce(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.centripetalAcceleration = (request, response) => {
	let operands = request.body,
		computed = formulas.centripetalAcceleration(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.centerMass = (request, response) => {
	let operands = request.body,
		computed = formulas.centerMass(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.reducedMass = (request, response) => {
	let operands = request.body,
		computed = formulas.reducedMass(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.work = (request, response) => {
	let operands = request.body,
		computed = formulas.work(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.potentialEnergy = (request, response) => {
	let operands = request.body,
		computed = formulas.potentialEnergy(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

exports.kineticEnergy = (request, response) => {
	let operands = request.body,
		computed = formulas.kineticEnergy(operands);

	const result = {
		message: 'success',
		endpoint: request.path,
		operands: operands,
		result: computed,
		requested_by: request.ip
	};

	response.json(result);
};

