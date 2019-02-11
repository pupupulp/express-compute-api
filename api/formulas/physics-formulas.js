exports.kinematicalMotion = (operands) => {
	let s = (operands.u * operands.t) + (1 / 2) * (operands.a * (operands.t ^ 2)),
		v = operands.u + (operands.a * operands.t),
		v2 = (operands.u ^ 2) + (2 * operands.a * s),
		vav = (v + operands.u) / 2;

	return vav;
};

exports.momentum = (operands) => {
	return operands.m * operands.v;
};

exports.force = (operands) => {
	return operands.m * operands.a;
};

exports.impulse = (operands) => {
	return operands.m * (operands.v - operands.u);
};

exports.pressure = (operands) => {
	return operands.f / operands.a;
};

exports.density = (operands) => {
	return operands.m / operands.v;
};

exports.angularMomentum = (operands) => {
	return operands.r * operands.p;
};

exports.torque = (operands) => {
	return operands.r * operands.f;
};

exports.centripetalForce = (operands) => {
	return (operands.m * (operands.v ^ 2)) / operands.r;
};

exports.centripetalAcceleration = (operands) => {
	return (operands.v ^ 2) / operands.r;
};

exports.centerMass = (operands) => {
	let summationOfMr = 0,
		summationOfM = 0;

	for(let i = 0; i < operands.n; i++) {
		summationOfMr += 1 * operands.m[i] * operands.r[i];
		summationOfM += 1 * operands.m[i];
	}

	return summationOfMr / summationOfM;
};

exports.reducedMass = (operands) => {
	return (operands.m * operands.m2)  / (operands.m + operands.m2);
};

exports.work = (operands) => {
	return operands.f * operands.d;
};

exports.potentialEnergy = (operands) => {
	return operands.m * operands.g * operands.h;
};

exports.kineticEnergy = (operands) => {
	return (operands.m * (1 / 2)) * (operands.v ^ 2);
};

exports.power = (operands) => {
	if(operands.hasOwnProperty('i')) {
		return (operands.i ^ 2) * operands.r
	}

	return (operands.v ^ 2) * operands.r;
};

exports.friction = (operands) => {
	return operands.f / operands.n;
};

exports.horizontalForce = (operands) => {
	return operands.u * operands.m * operands.g;
};

exports.momentInertiaDisk = (operands) => {
	return (operands.m * (operands.r ^ 2)) / 2;
};

exports.momentInertiaThinRod = (operands) => {
	return (operands.m * (operands.l ^ 2)) / 12;
};

exports.momentInertiaSolidSphere = (operands) => {
	return (2 * operands.m * (operands.r ^ 2)) / 5;
};

exports.momentInertiaSolidShell = (operands) => {
	return (2 * operands.m * (operands.r ^ 2)) / 3;
};

exports.gravity = (operands) => {
	const GRAVITATIONAL_CONSTANT = 6.67191 * 10 ^ (-11);
	return (GRAVITATIONAL_CONSTANT * operands.m * operands.m2) / (operands.r ^ 2);
};

exports.projectileHeight = (operands) => {
	return ((operands.v ^ 2) * (Math.sin(operands.d) ^ 2)) / (2 * operands.g);
};

exports.projectileRange = (operands) => {
	return ((operands.v ^ 2) * Math.sin(operands.d * 2)) / operands.g;
};

exports.simplePendulum = (operands) => {
	const PIE = 3.14;
	return (2 * PIE) * Math.sqrt(operands.l / operands.g);
};

exports.conicalPendulum = (operands) => {
	const PIE = 3.14;
	return (2 * PIE) * Math.sqrt((operands.l * Math.cos(operands.d)) / operands.g);
};

exports.voltage = (operands) => {
	return operands.i * operands.r;
};


