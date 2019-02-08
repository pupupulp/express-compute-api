'use strict';

module.exports = (app) => {
	var arithmeticController = require('../controllers/arithmetic-controller');

	app.route('/compute/arithmetic')
		.get(arithmeticController.index);

}