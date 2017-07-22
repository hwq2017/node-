var fs = require('fs');

fs.access('./txt1.md','fs.constants.F_OK | fs.constants.W_OK',function (err) {
  // console.log(err);
  if (err) {
    fs.mkdir('./txt1.md',function (err) {
      if (err) {
        console.log('err');
      }else{
        console.log('create success');
      }
    })
  }else{
    fs.rmdir('./txt1.md',function (err) {
      if (err) {
        console.log('error');
      }else{
        console.log('remove success');
      }

    })

  }

  // console.log(err? 'no access!' : 'can readFile');
} )
