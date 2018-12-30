var ds18b20 = require('ds18b20');
var TempData = require('./tempDataModel');
var _ = require('lodash');

exports.get = function(req, res, next) {
  TempData.find({})
    .then(function(tempData){
      res.json(tempData);
    }, function(err){
      console.log(err);
    });
};

exports.save = function(req, res, next) {
  saveCurrentTempSensorValue();
}

function saveCurrentTempSensorValue() {
  ds18b20.sensors(function(err, ids) {
    if (err) console.log(err);
    else {
      ds18b20.temperature(ids[0], function(err, temp){
        var itemp = 18;
        var tempData = new TempData( {value : itemp, location : 'Lollschied', date : Date.now()});
        tempData.save(function(err, tempData) {
          if (err) console.log(err);
        });
      })    
    }
  });
}