var http = require('http');
var fs = require('fs');
var query = require('querystring');

var serv = http.createServer(function(req,res){
  if (req.url == '/') {
    fs.readFile('./index.html','utf8',function (err,data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    })
  }else if (req.url == '/success.html' && req.method == 'POST') {
    var string = '';
    var obj;
    req.on('data',function (datas) {
      string += datas;
      obj = query.parse(string);
    });
    req.on('end',function(){
      if (/forget/.test(obj)) {
        //req.on('end',function(){
          fs.readFile('./forget.html','utf8',function (err,data) {
            if (err) {
              console.log(err);
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
          })
        //})
      }else if (/signup/.test()) {
        //req.on('end',function(){
          fs.readFile('./success.html','utf8',function (err,data) {
            if (err) {
              console.log(err);
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
          })
        //})
      }else if (/signin/.test()) {
        // req.on('end',function(){
          fs.readFile('./signin.html','utf8',function (err,data) {
            if (err) {
              console.log(err);
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
          })

      }
    })


  }else{
    res.writeHead(404);
    res.end('Not found.')
  }
}).listen(4000);
