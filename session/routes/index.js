var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(typeof(req.session.name) == 'undefined'){
    req.session.name = null
  }
  res.render('index', { title: 'Express', name:req.session.name });
});

module.exports = router;
