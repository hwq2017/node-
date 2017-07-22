var mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/stu';

var dbremove = function (db,callback) {
  var collect = db.collection('stus');
  var data = {"name":"huangwenqian"};

  // 删除所有符合条件的
  // collect.remove(data,function(err,result){
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   callback(result);
  // })


  // 删除符合条件的第一条数据
  /*collect.deleteOne(data,function(err,result){
    if (err) {
      console.log(err);
      return;
    }
    callback(result);
  })*/

// 删除所有符合条件的 == remove
/*  collect.deleteMany(data,function(err,result){
    if (err) {
      console.log(err);
      return;
    }
    callback(result);
  })*/

// 删除整个集合
  collect.drop(function(err,result){
    if (err) {
      console.log(err);
      return;
    }
    callback(result);
  })
};

mongoclient.connect(url,function (err,db) {
  if (err) {
    console.log(err);
  }else{
    console.log('连接成功！！');
    dbremove(db,function(result){
      console.log('--------',result);
      db.close();
    })
  }
})
