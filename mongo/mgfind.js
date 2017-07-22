var mongoclient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/stu';


var dbfind = function(db,callback){
  var collect = db.collection('stus');
  var data = {'name':'huangwenqian'};

  collect.find(data).toArray(function(err,result){
    if (err) {
      console.log(err);
      return;
    }else{
      callback(result);
    }
  })
}

mongoclient.connect(url,function(err,db){
  if(err){
    console.log(err);
  }else{
    console.log('连接成功！！！');
    dbfind(db,function(result){
      console.log(result);
      db.close();
    })
  }
})
