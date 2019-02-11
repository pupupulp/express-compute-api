module.exports = (app) => {
	var arithmeticEndpoint = require('../endpoints/arithmetic-endpoint');
	arithmeticEndpoint(app);
}