var router = require('express').Router();
var tempDataController = require('./tempData/tempDataController');

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

var tempSaveInterval = setInterval(SaveTemp, 10000);
//SaveDummyTemp();  //only for testing

function SaveTemp() {
  tempDataController.save();    
}

function SaveDummyTemp() {
  tempDataController.saveDummyData();    
}



router.use('/tempData', require('./tempData/tempDataRoutes'));
module.exports = router;