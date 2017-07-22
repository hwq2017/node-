var mongoclient = require("mongodb").MongoClient;
var assert = require("assert");// 断言
var url = "mongodb://localhost:27017/stu";


var findDB = function(db,callback){
    var data = db.collection('stus').find();
    data.each(function(err,doc){
      if (err) {
        console.log(err);
      }
      if (doc) {
        // console.log(doc);
        callback(doc)
      }else{
        // callback();
        db.close();
      }
    })
}

mongoclient.connect(url,function(err,db){
  if (err) {
    console.log(err);
  }
  console.log('连接成功！');
  findDB(db,function(doc){
    // db.close();
    console.log(doc);
  })


})
