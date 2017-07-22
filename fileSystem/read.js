var fs = require('fs');

fs.open('txt.md','r+',(err,fd) => {
  if(err){
    console.log(err);
  }else{
    console.log(fd);
    console.log('open success');

  var buffer1 = new Buffer(7);
  fs.read(fd,buffer1,0,5,null,(err,bytesRead,buffer) => {
    if (err) {
      console.log('err');
    }
      console.log(bytesRead);

      console.log(typeof buffer);
  })
}
  fs.close(fd,(err) => {
    if (err) {
      console.log(err);
    }
    console.log('close success');
  })
})
