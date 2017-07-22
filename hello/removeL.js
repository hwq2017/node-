
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

var callback = function(stream) {
  // console.log('someone connected!');
};

// event.on('event1',function(){
//   console.log('event occured.');
// });
event.on('event1',function () {
  console.log('hello');
});

event.removeListener('event1',function () {
console.log('hello');
});
setTimeout(function () {
  event.emit('event1');
},1000);
