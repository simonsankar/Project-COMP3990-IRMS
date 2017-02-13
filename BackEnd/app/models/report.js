var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ReportSchema   = new Schema({
    report_type1: String,
	report_type2: String,
	description: String,
	votes: Number,
	loc: {
	type: [Number], //[<longitude>, <latitude>]
	index: '2d'		//create the geospatial index
	}
	
});

module.exports = mongoose.model('Report', ReportSchema);