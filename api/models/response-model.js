var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ComputationSchema = new Schema({
	requested_by: { 
		type: String 
	},
	endpoint: { 
		type: String 
	},
	operands: {
		type: Object
	},
	message: {
		type: String
	},
	result: {
		type: Number,
		get: (value) => {
			return (value / 100).toFixed(2);
		},
		set: (value) => {
			return value * 100;
		}
	},
	request_date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Computations', ComputationSchema);
