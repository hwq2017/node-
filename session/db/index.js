var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/user';

mongoose.connect(url);
var db = mongoose.connection;
db.on('error',function (error) {
  console.log(error);
})
db.once('open',function () {
  console.log('connect is ok!');
})

var Schema = mongoose.Schema;
var schema = new Schema({
  name:String,
  password:String
});

module.exports.user = mongoose.model('login',schema);
