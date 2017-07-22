var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/wei-user';

var bodyParser = require('body-parser');

// var collect;

app.set('views',__dirname + '/views')
app.set('view engine','ejs');

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/signup.html');
});


app.get('/ind',function (req,res) {
  // res.send('sklgjdlfgjlf');
  mongoclient.connect(url, function(err, db) {
    if (err) {
      console.log('Error:', err);
    } else {
    var  collect = db.collection('user');
      collect.find({
        "username": req.query.fname,
        "userpasswd": req.query.fpasswd
      }).each(function(err, result) {

        if (err) {
          console.log('=====',err);
          return;
          // (result[0].username == req.body.fname) && (result[0].userpasswd == req.body.fpasswd)
        }else if (result !== null) {
          if (result.userpasswd == req.query.fpasswd) {

            res.redirect(__dirname + '/index');

            // res.sendFile(__dirname + '/index.html');

            console.log('******',result);
          }
        }else {
          // console.log("========",result);
          // res.send('用户名或密码不正确！');
          // res.sendFile(__dirname + '/index.html');

        }
        db.close();
      })

    }
  })

 })
//
// app.post('/signin',function(req,res){
//
//   res.sendFile(__dirname + '/signin.html');
// });
//
//
// app.post('/signup',function(req,res){
//   mongoclient.connect(url,function(err,db){
//     if (err) {
//       console.log('Error:',err);
//     }else{
//       collect = db.collection('user');
//       collect.insert(req.body,function (err,result) {
//         if (err) {
//           console.log('Error:',err);
//           db.close();
//         }else{
//           db.close();
//         }
//       });
//     }
//   })
//   res.sendFile(__dirname + '/signup.html');
// });

// app.post('/index',function(req,res){
//  res.render('/index');
// });

// io.on('connection',function (socket) {
//   socket.on('chat message',function(msg){
//     console.log(msg);
//     io.emit('chat message',msg);
//   });
// });

app.post('/index',function(req,res){
 res.render('index');
});

io.on('connection',function (socket) {

  socket.broadcast.emit('broadcast');
  socket.on('chat message',function (msg) {

    io.emit('chat messages',msg);
    // socket.emit('duihao');

  });

})








http.listen(2500);
