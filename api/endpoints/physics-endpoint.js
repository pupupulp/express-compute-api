module.exports = (app) => {
	const BASE_URL = '/compute/physics'; 
	let	controller = require('../controllers/physics-controller');

	app.route(BASE_URL)
		.get(controller.index);

	app.route(BASE_URL + '/kinematical-motion')
		.post(controller.kinematicalMotion);
}