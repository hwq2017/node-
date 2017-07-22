
var fs = require('fs');

// var data = 'hello world';
// fs.writeFile('text.html',data,function(err){
//   if(err){
//     console.log(err);
//   }
// });


fs.readFile('text.html','utf8',function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
console.log('read the file end');

var data = 'hello world';
fs.writeFile('text.html',data,function(err){
  if(err){
    console.log(err);
  }
});


// var fs = require('fs');
// fs.readFile('text.html',function(err,data){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// })
// console.log('read the file end');


// var fs = require('fs');
// fs.readFile('text.html');
// console.log('read the file end');
