module.exports = (app) => {
	const BASE_URL = '/compute/arithmetic'; 
	let	controller = require('../controllers/arithmetic-controller');

	app.route(BASE_URL)
		.get(controller.index);

	app.route(BASE_URL + '/add')
		.get(controller.listComputations)
		.post(controller.add);

	app.route(BASE_URL + '/subtract')
		.get(controller.listComputations)
		.post(controller.subtract);

	app.route(BASE_URL + '/multiply')
		.get(controller.listComputations)
		.post(controller.multiply);

	app.route(BASE_URL + '/divide')
		.get(controller.listComputations)
		.post(controller.divide);

	app.route(BASE_URL + '/mod')
		.get(controller.listComputations)
		.post(controller.mod);
}