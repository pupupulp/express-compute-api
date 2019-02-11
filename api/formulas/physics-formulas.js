exports.kinematicalMotion = (operands) => {
	let s = (operands.u * operands.t) + (1 / 2) * (operands.a * (operands.t ^ 2)),
		v = operands.u + (operands.a * operands.t),
		v2 = (operands.u ^ 2) + (2 * operands.a * s),
		vav = (v + operands.u) / 2;

	return vav;
}

exports.momentum = (operands) => {
	return operands.m * operands.v;
}

exports.force = (operands) => {
	return operands.m * operands.a;
}

exports.impulse = (operands) => {
	return operands.m * (operands.v - operands.u);
}

exports.pressure = (operands) => {
	return operands.f / operands.a;
}

exports.density = (operands) => {
	return operands.m / operands.v;
}

exports.angularMomentum = (operands) => {
	return operands.r * operands.p;
}

exports.torque = (operands) => {
	return operands.r * operands.f;
}

exports.centripetalForce = (operands) => {
	return (operands.m * (operands.v ^ 2)) / operands.r;
}

exports.centripetalAcceleration = (operands) => {
	return (operands.v ^ 2) / operands.r;
}

exports.centerMass = (operands) => {
	let summationOfMr = 0,
		summationOfM = 0;

	for(let i = 0; i < operands.n; i++) {
		summationOfMr += 1 * operands.m[i] * operands.r[i];
		summationOfM += 1 * operands.m[i];
	}

	return summationOfMr / summationOfM;
}

exports.reducedMass = (operands) => {
	return (operands.m * operands.m2)  / (operands.m + operands.m2);
}

exports.work = (operands) => {
	return operands.f * operands.d;
}

exports.potentialEnergy = (operands) => {
	return operands.m * operands.g * operands.h;
}

exports.kineticEnergy = (operands) => {
	return (operands.m * (1 / 2)) * (operands.v ^ 2);
}
