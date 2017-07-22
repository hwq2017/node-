var express = require('express');
var app = express();
app.listen(3000);

// app.get('/',function(req,res){
//   res.send('hello world');
// })
// app.get('/index',function(req,res){
//   res.send('hahhahfa ');
// })
app.use(express.static(__dirname + '/public'));
