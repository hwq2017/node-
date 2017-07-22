var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.listen(3000);

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html')
})
io.on('connection',function(socket){
  console.log('connected');
  socket.emit('news',{hello:'world'})
  socket.on('other',function(data){
  console.log(data);
  })

})
