var mongoclient = require("mongodb").MongoClient;
var url =  "mongodb://localhost:27017/stu";

var insert = function(db,callback){
  var collect = db.collection('stus');
  var data = [{'name':'huangwenqian','age':18},{'name':'lisi','age':15}];
  collect.insert(data,function(err,result){
    if (err) {
      console.log(err);
      db.close();
    }else {
      callback(result);
    }
  })
}

mongoclient.connect(url,function (err,db) {

  if (err) {
    console.log(err);
  }
  console.log("连接成功！");
  insert(db,function(result){
    console.log(result);
    db.close();
  })

})
