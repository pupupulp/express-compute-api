module.exports = (app) => {
	const BASE_URL = '/compute/physics'; 
	let	controller = require('../controllers/physics-controller');

	app.route(BASE_URL)
		.get(controller.index);

	app.route(BASE_URL + '/kinematical-motion')
		.post(controller.kinematicalMotion);

	app.route(BASE_URL + '/momentum')
		.post(controller.momentum);

	app.route(BASE_URL + '/force')
		.post(controller.force);

	app.route(BASE_URL + '/impulse')
		.post(controller.impulse);

	app.route(BASE_URL + '/pressure')
		.post(controller.pressure);

	app.route(BASE_URL + '/density')
		.post(controller.density);

	app.route(BASE_URL + '/angular-momentum')
		.post(controller.angularMomentum);

	app.route(BASE_URL + '/torque')
		.post(controller.torque);

	app.route(BASE_URL + '/centripetal-force')
		.post(controller.centripetalForce);

	app.route(BASE_URL + '/centripetal-acceleration')
		.post(controller.centripetalAcceleration);

	app.route(BASE_URL + '/center-mass')
		.post(controller.centerMass);

	app.route(BASE_URL + '/reduced-mass')
		.post(controller.reducedMass);

	app.route(BASE_URL + '/work')
		.post(controller.work);

	app.route(BASE_URL + '/potential-energy')
		.post(controller.potentialEnergy);

	app.route(BASE_URL + '/kinetic-energy')
		.post(controller.kineticEnergy);
}