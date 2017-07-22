var fs = require('fs');


fs.exists('./hello', function(exists){
  if (exists) {
    fs.rmdir('./hello',function (err) {
      if (err) {
        console.log('err');
      }else{
        console.log('remove success');
      }

    })
  }else{
    fs.mkdir('./hello',function (err) {
      if (err) {
        console.log('err');
      }else{
        console.log('create success');
      }
    })
  }
})
