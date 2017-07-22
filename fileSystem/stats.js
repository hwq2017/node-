var fs = require('fs');

fs.stat('./txt.md',(err,stats) => {
  if (err) {
    console.log('err');
  }else{
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats);
  }
})
