var http = require('http');
var fs = require('fs');
var query = require('querystring');

var serv = http.createServer(function(req,res){
  if (req.url == '/') {
    var str = '';
    fs.readFile('./2.2.html',function (err,data) {
      if (err) {
        console.log(err);
      }
      str += data;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(str);

    })
  }
}).listen(3000);
