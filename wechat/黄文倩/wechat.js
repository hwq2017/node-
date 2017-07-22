var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var assert = require('assert');

var mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/wei-user';

var bodyParser = require('body-parser');

var userName, userPasswd;

app.set('views',__dirname + '/views')
app.set('view engine','ejs');

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

app.get('/',function(req,res){
  // res.sendFile(__dirname + '/signup.html');
  res.render('signup');
});


app.post('/ind',function (req,res) {

  mongoclient.connect(url, function(err, db) {
    if (err) {
      console.log('Error:', err);
    } else {
    var collect = db.collection('user');
      collect.find({
        "username": req.body.fname,
        "userpasswd": req.body.fpasswd
      }).each(function(err, result) {
         assert.equal(err,null);
        if (result !== null) {
          userName = result.username;
          userPasswd = result.userpasswd;
          if (result.userpasswd == req.body.fpasswd) {
            res.redirect('/index');
          }
        }else {
          // console.log("========",result);
          // res.render('signup',{name:"用户名或密码错误！！！"});
          res.sendFile(__dirname + '/signup.html');
          // res.send('错误');
        }
      })
      db.close();

    }
  })

 })

app.post('/signin',function(req,res){

  res.sendFile(__dirname + '/signin.html');
});


app.post('/signin-succ',function(req,res){
  if (req.body.username && req.body.userpasswd) {

    var name = req.body.username,
    passwd = req.body.userpasswd;
    mongoclient.connect(url,function(err,db){
      // if (err) {
      //   console.log('=======Error:',err);
      // }
      //else{
      assert.equal(null,err);
      var collectname = db.collection('user');
      collectname.find({"username":name}).each(function (err,result) {

        console.log(result);
        if(result !== null){
          res.render('name');
          db.close();
          return;
        }else{
          console.log(result);
          collectname.insert({"username":name,"userpasswd":passwd},function (err,result) {
            if (err) {
              console.log('*********Error:',err);
              db.close();
              return;
            }

          });
          console.log('--------------------------');
          res.redirect('/');
          //  db.close();

        }
      })
      //}
    })
  }else{
    console.log('++++++++++++++++++++++');
    res.send('+++++++++++++++');
  }

  //     var collect = db.collection('user');
  //     collect.insert(req.body,function (err,result) {
  //       if (err) {
  //         console.log('Error:',err);
  //         db.close();
  //       }else{
  //
  //         db.close();
  //       }
  //     });
  //   }
  // })

});

app.get('/fp',function(req,res){
 res.sendFile(__dirname + '/fp.html');
});
app.post('/pass-succ',function (req,res) {
  mongoclient.connect(url,function(err,db){
    if (err) {
      console.log('Error:',err);
    }else{
      var collect = db.collection('user');
      var name1 = req.body.fname;
      var pass2 = req.body.fpasswd;
      console.log(name1,pass2);
      // var pass3 = req.body.fpass;
      collect.update({"username":name1},{$set:{"userpasswd":pass2}},function (err,result) {
        if (err) {
          console.log('Error:',err);
          db.close();
        }else{
          res.sendFile(__dirname + '/signin-succ.html');
          db.close();
        }
      });
    }
  })
})

app.get('/index',function(req,res){
 res.render('index');
});

io.on('connection',function (socket) {
  const uname = userName;
  socket.emit('log',userName,userPasswd);
  socket.broadcast.emit('broadcast');
  socket.on('chat message',function(msg){
    io.emit('chat message',msg,uname);
    socket.emit('myname');
    socket.emit('duihao');
    // socket.emit('uname',uname);
  });

});









http.listen(2000);
