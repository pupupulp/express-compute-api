module.exports = (app) => {
	const BASE_URL = '/compute/physics'; 
	let	controller = require('../controllers/physics-controller');

	app.route(BASE_URL)
		.get(controller.index);

	app.route(BASE_URL + '/kinematical-motion')
		.get(controller.listComputations)
		.post(controller.kinematicalMotion);

	app.route(BASE_URL + '/momentum')
		.get(controller.listComputations)
		.post(controller.momentum);

	app.route(BASE_URL + '/force')
		.get(controller.listComputations)
		.post(controller.force);

	app.route(BASE_URL + '/impulse')
		.get(controller.listComputations)
		.post(controller.impulse);

	app.route(BASE_URL + '/pressure')
		.get(controller.listComputations)
		.post(controller.pressure);

	app.route(BASE_URL + '/density')
		.get(controller.listComputations)
		.post(controller.density);

	app.route(BASE_URL + '/angular-momentum')
		.get(controller.listComputations)
		.post(controller.angularMomentum);

	app.route(BASE_URL + '/torque')
		.get(controller.listComputations)
		.post(controller.torque);

	app.route(BASE_URL + '/centripetal-force')
		.get(controller.listComputations)
		.post(controller.centripetalForce);

	app.route(BASE_URL + '/centripetal-acceleration')
		.get(controller.listComputations)
		.post(controller.centripetalAcceleration);

	app.route(BASE_URL + '/center-mass')
		.get(controller.listComputations)
		.post(controller.centerMass);

	app.route(BASE_URL + '/reduced-mass')
		.get(controller.listComputations)
		.post(controller.reducedMass);

	app.route(BASE_URL + '/work')
		.get(controller.listComputations)
		.post(controller.work);

	app.route(BASE_URL + '/potential-energy')
		.get(controller.listComputations)
		.post(controller.potentialEnergy);

	app.route(BASE_URL + '/kinetic-energy')
		.get(controller.listComputations)
		.post(controller.kineticEnergy);

	app.route(BASE_URL + '/power')
		.get(controller.listComputations)
		.post(controller.power);

	app.route(BASE_URL + '/friction')
		.get(controller.listComputations)
		.post(controller.friction);

	app.route(BASE_URL + '/horizontal-force')
		.get(controller.listComputations)
		.post(controller.horizontalForce);

	app.route(BASE_URL + '/moment-inertia')
		.get(controller.listComputations)
		.post(controller.momentInertia);

	app.route(BASE_URL + '/gravity')
		.get(controller.listComputations)
		.post(controller.gravity);

	app.route(BASE_URL + '/projectile-height')
		.get(controller.listComputations)
		.post(controller.projectileHeight);

	app.route(BASE_URL + '/projectile-range')
		.get(controller.listComputations)
		.post(controller.projectileRange);

	app.route(BASE_URL + '/simple-pendulum')
		.get(controller.listComputations)
		.post(controller.simplePendulum);

	app.route(BASE_URL + '/conical-pendulum')
		.get(controller.listComputations)
		.post(controller.conicalPendulum);
}