module.exports = (app) => {
	const BASE_URL = '/compute/arithmetic'; 
	let	arithmeticController = require('../controllers/arithmetic-controller');

	app.route(BASE_URL)
		.get(arithmeticController.index);

	app.route(BASE_URL + '/add')
		.post(arithmeticController.add);

	app.route(BASE_URL + '/subtract')
		.post(arithmeticController.subtract);

	app.route(BASE_URL + '/multiply')
		.post(arithmeticController.multiply);

	app.route(BASE_URL + '/divide')
		.post(arithmeticController.divide);

	app.route(BASE_URL + '/mod')
		.post(arithmeticController.mod);
}