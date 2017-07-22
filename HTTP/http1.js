var http = require('http');
var fs = require('fs');
var query = require('querystring');

var serv = http.createServer(function(req,res){
  if (req.url == '/') {
    var str = '';
    fs.readFile('./index.html',function (err,data) {
      if (err) {
        console.log(err);
      }
      str += data;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(str);
    })
  }
  if (req.url == '/url' && req.method == 'POST') {
    var string = '';
    var obj;
    req.on('data',function (datas) {
      string += datas;
      obj = query.parse(string);
    })
    req.on('end',function(){
      // res.writeHead(200,{'Content-Type':'text/html'});
      // res.end();
      // fs.readFile('./success.html','utf8',function (err,data) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   res.writeHead(200,{'Content-Type':'text/html'});
      //   res.end(data);
      //
      // })
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(string);

    })
  }
}).listen(4000);
