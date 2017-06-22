var express = require('express');
var bodyParser = require('body-parser');
var productsCtrl = require('./productsCtrl.js')
var app = express();
app.use(bodyParser.json());
const massive = require('massive')

massive('postgres://hunterh1@localhost:5432/sandbox')
.then(instance => {
  app.set('db', instance);
});



app.get('/api/products', productsCtrl.GetAll);
app.get('/api/product/:id', productsCtrl.GetOne);
app.put('/api/product/:id?desc=desc', productsCtrl.Update);
app.post('/api/product', productsCtrl.Create);
app.delete('/api/product', productsCtrl.Delete);

























app.listen(3000, function(){
  console.log('this app is listening')
})
