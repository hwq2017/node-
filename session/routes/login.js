var express = require('express');
var bcrypt  = require('bcrypt');
var router = express.Router();
var db = require('../db');
var salt = 10;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login');
});
router.post('/',function (req,res) {
  db.user.findOne({
    name:req.body.username
  },function (err,data) {
    bcrypt.compare(req.body.password,data.password,function (err,result) {
      if(result){
        res.redirect('/');
      }else{
        res.redirect('/login');
      }
    })
  })
})
module.exports = router;
