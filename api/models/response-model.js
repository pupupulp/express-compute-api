var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ComputationSchema = new Schema({
	requested_by: { 
		type: String 
	}
	endpoint: { 
		type: String 
	},
	properties: {
		type: Object
	},
	message: {
		type: String
	},
	result: {
		type: Double
	},
	request_date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Computations', ComputationSchema);
