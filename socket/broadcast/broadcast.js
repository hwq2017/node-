var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(3000);

app.get('/',function (req,res) {
  res.sendFile(__dirname + '/index1.html');
})



io.sockets.on('connection', function (socket) {
  socket.broadcast.emit('user connected');
});
