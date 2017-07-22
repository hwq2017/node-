var fs = require('fs');
var data = '123445'
var  buf = new Buffer(10);
// console.log(buf);
fs.open('./txt.md','r+',(err,fd) => {
  if(err)console.log(err);

   fs.write(fd,buf,5,(err,writen,str) => {
      if(err){
      console.log('=====',err);
      fs.close(fd,(err) => {
        if (err) {
          console.log(err);
        }
      })
      return -1;
    }
     fs.read(fd,buf,0,2,0,(err,bytesRead,buffer) => {
       if(err){
         console.log(err);
         fs.close(fd,(err) => {
           if (err) {
             console.log(err);
           }
         })
         return -1;
       }
       console.log(bytesRead);
       console.log(buffer);
       fs.close(fd,(err) => {
         if (err) {
           console.log(err);
         }
       })
     })
      //  console.log(writen);
      //  console.log(str);


   })



 // buf 随机生成的一个缓冲区
/*  fs.write(fd,buf,0,8,0,(err,bytesWriten,buffer) => {
    if(err){
      console.log('=====',err);
      fs.close(fd,(err) => {
        if (err) {
          console.log(err);
        }
      })
      return -1;
    }
    console.log(bytesWriten);
    console.log(buffer);
    fs.close(fd,(err) => {
      if (err) {
        console.log(err);
      }
    })

  })*/
})
