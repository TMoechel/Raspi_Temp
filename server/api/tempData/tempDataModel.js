var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create the schema definition
var TempDataSchema = new Schema({
  value: Number,
  date: Date,
  location: String,
});

//create the mongoose model and export it
module.exports = mongoose.model('tempData', TempDataSchema);