var buffer1 = new Buffer(7);
var fs = require('fs');

fs.open('4.md','r+',(err,fd) => {
  if(err){
    console.log(err);
  }else{
fs.read(fd,buffer1,0,5,null,(err,bytesRead,buffer) => {
  if (err) {
    console.log('err');
  }
    console.log(bytesRead);

    console.log(typeof buffer);
    console.log(buffer);
})
}
})
