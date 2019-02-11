module.exports = (app) => {
	app.use(function(request, response) {
		response.status(404).send({ message: 'Endpoint ' + request.originalUrl + ' not found' })
	});
}