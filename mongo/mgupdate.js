var mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/stu';


var mgupdate = function (db,callback) {
  var collect = db.collection('stus');
  var data = [({'name':'lihua'},{$set:{'gender':'laday','class':'html'}})];
  collect.update(data,function(err,result){
    if(err){
      console.log(err);
      return;
    }else{
      callback(result);
    }
  })
}

mongoclient.connect(url,function(err,db){
  if(err)console.log(err);
  console.log('连接成功！！！');
  mgupdate(db,function (result) {
    console.log('==========',result);
    db.close();
  })
})
