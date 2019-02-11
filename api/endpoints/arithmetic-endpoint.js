module.exports = (app) => {
	const BASE_URL = '/compute/arithmetic'; 
	let	controller = require('../controllers/arithmetic-controller');

	app.route(BASE_URL)
		.get(controller.index);

	app.route(BASE_URL + '/add')
		.post(controller.add);

	app.route(BASE_URL + '/subtract')
		.post(controller.subtract);

	app.route(BASE_URL + '/multiply')
		.post(controller.multiply);

	app.route(BASE_URL + '/divide')
		.post(controller.divide);

	app.route(BASE_URL + '/mod')
		.post(controller.mod);
}