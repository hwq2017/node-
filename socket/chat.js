var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// console.log(io);
var connectionList = {};


app.get('/',function (req,res) {
  res.sendFile(__dirname + '/index1.html');
})

io.on('connection',function (socket) {

  socket.broadcast.emit('broadcast');
  socket.on('chat message',function (msg,uname) {

    io.emit('chat message',msg,uname);
    socket.emit('duihao');

  });

})
http.listen(4000);
