var http = require('http');

var serv = http.createServer(function (req,res) {
  var str = "<img src=''/>"
  res.writeHead(200,{'Content-Type':'text/html'});
  // res.end('success!');
  res.end(str);
}).listen(3000)
