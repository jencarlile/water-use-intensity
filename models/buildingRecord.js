var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BuildingRecordSchema   = new Schema({
    locationName: String,
    locationZipCode: String,
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