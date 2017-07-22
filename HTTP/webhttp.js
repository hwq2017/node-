var http = require('http');
var query = require('querystring');
var serv = http.createServer(function (req,res) {
  console.log(req.method);
  if (req.url == '/') {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(['<h1>welcome to node.js</h1>',
      '<form method="POST" action="/url">',
      '<fieldset>',
      '<label>personal information</label>',
      '<p>Name</p>',
      '<input type="text" name="name">',
      '<p>Age</p>',
      '<input type="text" name="age11">',
      '<p><button>Submit</button></p>',
      '</form>'
    ].join(' '));
  }else if (req.url == '/url' && req.method == 'POST') {

    var datas = '';
    var person = {};

    // data 是 request的内置事件，
    req.on('data',function (c) {
      // c 是一个对象
      datas += c;

      person = query.parse(datas);

      // person = JSON.parse(datas); // 不可以用JSON解析，datas字符串里含有&

    })

    req.on('end',function(){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end('<strong>name:</strong>' + person.name + '<br><br>' + '<strong>age:</strong>' + person.age);
    //  res.end(datas) // 输出input 里name属性的值
    })
  }else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.end('<h1>Not find url</h1>');
  }


}).listen(3000);
