module.exports = function (app) {
  app.get('/',function (req,res) {
    res.send('Welcome to Node.js');
  })
  app.get('/about',function (req,res) {
    res.send('Welcome to about');
  })
  app.get('/ur*l',function (req,res) {
    res.send('Welcome to url');
  })
  app.get('/submit',function (req,res) {
    res.redirect('/about');
  })
}
