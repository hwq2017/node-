var fs = require('fs');
var util = require('util');
var kMaxLength = require('smalloc').kMaxLength;

function rethrow(){

}

function maybeCallback(cd){
  return util.isFunction(cd)? cd : rethrow();
}

function assertEncoding() {
  if (encoding && !util.isEncoding(encoding)) {
    console.log('Error');
  }
}



function callback_(){

}

fs.readFile = function(path, options,callback_) {

  // 通过maybeCallback()函数判断传入的最后一个参数是不是函数，并将其重新命名为callback;
  var callback = maybeCallback(arguments[arguments.length - 1]);

  // 如果将callback_作为第二个参数传入，会被重新赋值成对象类型
  if (util.isFunction(options) || !options) {
    options = { encoding: null, flag: 'r' };
  }else if (util.isString(options)) {
    options = {encoding:options,flag:'r'};
  }else if (!util.isObject(options)) {
    throw new TypeError('Bad arguments');
  }


 // 拿到encoding通过assertEncoding()函数判断encoding是否存在并且是否是正确的编码格式
  var encoding = options.encoding;
  assertEncoding(encoding);


  var fd;
  var size;
  var buffer;
  var buffers = [];

  var flag = options.flag || 'r';
  fs.open(path,flag,function (err,fd_) {
    if (err) {
      return callback(err);
    }
    fd = fd_;
    fs.fstat(fd,function(err,stats){
      if (err) {
        return callback(err);
      }
      size = stats.size;
      if (size === 0) {
        // buffers = [] ????
        return read();
      }
    });
  });
  function read() {
    if (size === 0) {
      buffer = new Buffer(8192);
      fs.read(fd,buffer,0,8192,-1,afterRead)// 通过afterRead()提取读到的数据
    }
    if (size > kMaxLength) {
        var err = new RangeError('File size is greater than possible Buffer: ' +
            '0x3FFFFFFF bytes');
        return fs.close(fd, function() {
          callback(err);
        });
      }

  }
  function afterRead(err,bytesRead) {
    if(err){
      return fs.close(fd,function(err){
        return callback(err);
      })
    }
    if (bytesRead === 0) {
      return close();
    }

  }

  function close() {
    fs.close(fd,function(err){
      if (size === 0) {
        // buffer = Buffer.concat(buffers,pos)
      }
      return callback(err,buffer);
    })
  }
}

// fs.readFile('text.md',1,callback_);
