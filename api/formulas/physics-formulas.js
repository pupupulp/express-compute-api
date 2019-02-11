exports.kinematicalMotion = (operands) => {
	let s = (operands.u * operands.t) + (1 / 2) * (operands.a * operands.t) ^ 2,
		v = operands.u + (operands.a * operands.t),
		v2 = operands.u ^ 2 + (2 * operands.a * s),
		vav = (v + operands.u) / 2;

	return vav;
}