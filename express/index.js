var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views',__dirname + '/views')
app.set('view engine','ejs');

app.use(bodyParser.json({limit:'1mb'}));
app.use(bodyParser.urlencoded({
  extended: true
}));
var routes = require('./route.js')(app);

var info = [{'name':'lisi','age':12},{'name':'dabing','age':11},{'name':'lihua','age':12}]
// app.get('/view',function(req,res){
//   res.render('view',{name:'北京',info:info});
//   // console.log(req.query);
//
// })
app.post('/viewss',function (req,res) {

  // res.render('view',{name:'北京',info:info});
  console.log(req.body);
});

app.listen(3000);
