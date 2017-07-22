var fs = require('fs');
var data = fs.readFileSync('text.html','utf8');
console.log('read the file start');
console.log(data);
console.log('read the file end');
