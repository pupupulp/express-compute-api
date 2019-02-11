module.exports = (app) => {
	const BASE_URL = '/compute/arithmetic'; 
	let	arithmeticController = require('../controllers/arithmetic-controller');

	app.route(BASE_URL)
		.get(arithmeticController.index);

	app.route(BASE_URL + '/add')
		.post(arithmeticController.add);

	app.route(BASE_URL + '/subtract')
		.post(arithmeticController.subtract);
}