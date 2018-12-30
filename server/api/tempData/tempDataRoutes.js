var _ = require('lodash');
var router = require('express').Router();
//var logger = require('../../util/logger')

var KeyId = 0;

router.route('/')
    .get(function (req, res) {
        tempDataController.get(req, res);
    })
  
module.exports = router;