var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BuildingRecordSchema   = new Schema({
    streetAddress: String,
    city: String,
    state: String,
    zipCode: String,
    description: String,
    buildingType: String,
    reportYear: Number,
    waterUsageIntensity: Number,
    sqFt: Number,
    totalWaterUsage: Number,
    yearBuilt: Number,
    reportType: String
});

module.exports = mongoose.model('BuildingRecord', BuildingRecordSchema);