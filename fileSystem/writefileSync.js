var fs = require('fs');
var data = 'hello';

// 同步写入数据到文件，如果文件已存在，就代替; 如果文件不存在，就自动创建
try {
  fs.writeFileSync('txt.md',data);
} catch (e) {
  console.log(e);
}
