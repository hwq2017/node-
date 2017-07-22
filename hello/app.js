var http = require('http');
var serv = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<h1>Hello world!!!</h1>');
  res.end('<h1>Hello world!!!</h1>');
  res.end('<h1>Hello world!!!</h1>');
  console.log('hello');
  console.log('hello');
  console.log('hello');

});
serv.listen(3000);
console.log('nihao');
