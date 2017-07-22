var http = require('http');
var fs = require('fs');
var query = require('querystring');
var mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/user-information'


var serv = http.createServer(function(req, res) {

  var insertdb = function(db, obj, callback) {
    var collect = db.collection('user');
    collect.insert(obj, function(err, result) {
      if (err) {
        console.log(err);
        db.close();
      } else {
        callback();
      }
    })
  }


  if (req.url == '/') {
    fs.readFile('./index.html', 'utf8', function(err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    })
  }
  else if (req.url == '/success' && req.method == 'POST') {
    var string = '';
    var obj;
    var username;
    var pswd
    req.on('data', function(datas) {
      string += datas;
      obj = query.parse(string);
      username = obj.name;
      pswd = obj.password;

      // fs.writeFile('./user.html',string,(err) => {
      //   if(err)throw(err);
      //   console.log('done');
      // })
      mongoclient.connect(url, function(err, db) {
        if (err) {
          console.log('Error:', err);
        } else {
          var collect = db.collection('user');
          collect.find({
            "username": username,
            "password": pswd
          }).each(function(err, result) {
            if (err) {
              console.log(err);
              return;
            }
            console.log(result);
            if (result) {
              res.writeHead(200, {
                'Content-Type': 'text/html'
              });
              res.end('<meta charset="UTF-8"><h1>登录成功！</h1>');
            } else {
              res.writeHead(200, {
                'Content-Type': 'text/html'
              });
              res.end('<meta charset="UTF-8"><h1>登录失败！</h1>');
            }
            db.close();
          })

        }
      })

    });

    req.on('end', function() {


    })

  }
  else if (req.url == '/signin' && req.method == 'POST') {
    fs.readFile('./signin.html', 'utf8', function(err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    })

  }

  else if (req.url == '/signin-success' && req.method == 'POST') {

    fs.readFile('./signin-success.html', 'utf8', function(err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(data);
    })

    var string = '';
    var obj;
    req.on('data', function(datas) {
      string += datas;
      objs = query.parse(string);
      mongoclient.connect(url, function(err, db) {
        if (err) {
          console.log('Error:', err);
        } else {
          insertdb(db, objs, function() {
            db.close();
          })
        }
      })
    });
  }
  else if (req.url == '/forget' && req.method == 'POST') {


      fs.readFile('./forget.html', 'utf8', function(err, data) {
        if (err) {
          console.log(err);
        }
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(data);
      })

  }else if (req.url == '/' && req.method == 'POST') {


      fs.readFile('./index.html', 'utf8', function(err, data) {
        if (err) {
          console.log(err);
        }
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        res.end(data);
      })

  }
  else {
    res.writeHead(404);
    res.end('Not found.')
  }

}).listen(4000);
