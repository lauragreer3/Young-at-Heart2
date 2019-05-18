var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Express Vacation REST API');
});
   
module.exports = router;
