var fs = require('fs');


// fs.open(path,flag,mode,callback) mode只有当文件被创建时才有效。
fs.open('./open.md','wx',0600,(err,fd) => {
  if (err) {
    console.log(err);
  }
  console.log(fd);
})
