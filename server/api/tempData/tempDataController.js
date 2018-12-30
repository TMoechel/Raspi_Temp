var TempData = require('./tempDataModel');
var _ = require('lodash');

exports.get = function(req, res, next) {
  TempData.find({})
    .then(function(tempData){
      res.json(tempData);
    }, function(err){
      next(err);
    });
};

