module.exports = (app) => {
	var arithmeticEndpoint = require('../endpoints/arithmetic-endpoint'),
		physicsEndpoint = require('../endpoints/physics-endpoint');
	
	arithmeticEndpoint(app);
	physicsEndpoint(app);
}