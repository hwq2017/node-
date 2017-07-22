var fs = require('fs');
// var buffer1 = new Buffer(7);
// var buf = new Buffer(7);

fs.open('txt.md','r+',(err,fd) => {
  if(err){
    console.log(err);
  }else{
    console.log(fd);
    console.log('open success');

    fs.write(fd,'lala',0,5,null,(err,bytesW,buffer) => {
      if (err) {
        console.log(err);
        fs.close(fd,(err) => {
          if(err)console.log(err);
        })
        return -1;
      }
      // fs.read(fd,buf,0,5,null,(err,btR,buffer) => {
      //   if (err) {
      //     console.log(err);
      //     return -1;
      //   }
        console.log(buffer);
        fs.close(fd,(err) => {
          if(err)console.log(err);
        })
      //})
    })


}

})
