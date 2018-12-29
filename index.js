var ds18b20 = require('ds18b20');
ds18b20.sensors(function(err, ids) {
  //console.log(ids);
  ds18b20.temperature(ids[0], function(err, value){
    console.log("Current Temperature is: ", value);
  })
});
