var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('event',function(){
  console.log('event occured.');
});
event.on('event1',function(){
   event.emit('event');
});
event.once('event2',function(){
  console.log('event2 occured');
});
removeAllListeners();
// event.removeListener('event1',callback);
setTimeout(function () {
  event.emit('event1');
},1000);
