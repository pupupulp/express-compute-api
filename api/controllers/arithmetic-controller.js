exports.index = (request, response) => {
	response.json({
		code: 'success',
		message: 'Welcome to Compute API Arithmetic endpoint.'
	})
};

exports.add = (request, response) => {
	let body = request.body,
		a = body.a,
		b = body.b,
		result = a + b;

	response.json({
		code: 'success',
		result: result
	});
};

exports.subtract = (request, response) => {
	let body = request.body,
		a = body.a,
		b = body.b,
		result = a - b;

	response.json({
		code: 'success',
		result: result
	});
};