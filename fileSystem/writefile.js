var fs = require('fs');


// 异步写入数据到文件，如果文件已存在，则代替; 否则，自动创建文件并将数据读进去
var data = 'hello world';
fs.writeFile('text.html',data,function(err){
  if(err){
    console.log(err);
  }
});

// var data1 = 'hello beijing';
// 如果对同一文件进行多次读的操作后，最后一次读的内容会将前一次读进去的内容从头覆盖掉最后一次读进去内容的长度
fs.writeFile('text.html','app.js',function(err){
  if(err){
    console.log(err);
  }
});

fs.writeFile('text.html','12',function(err){
  if(err){
    console.log(err);
  }
});

// fs.writeFileSync('text.html',data,'utf8');
fs.readFile('text.html','utf8',function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
console.log('read the file end');
