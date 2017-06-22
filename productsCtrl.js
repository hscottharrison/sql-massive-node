module.exports = {
  Create: function(req, res, next){
    var instance = req.app.get('db')

    instance.create_product([req.body.name, req.body.desc, req.body.price, req.body.url])
    .then(function(){

      res.status(200).json('success!');
    }).catch(function(err){
      console.log('There was an error!');
      return res.status(404).json(err);
    })
  },
  GetOne: function(req, res, next){
    var instance = req.app.get('db')

    instance.read_product([req.body.id]).then(product => {
      res.status(200).json(product);
    })
  },
  GetAll: function(req, res, next){
    var instance = req.app.get('db')

    instance.read_products().then(products => {
      res.status(200).json(products);
    }).catch(function(err){
      console.log('There was an error!');
      return res.status(404).json(err);
    })
  },
  Update: function(req, res, next){
    var instance = req.app.get('db')

    instance.update_product([req.body.desc, req.body.id]).then(function(){
      res.status(200).json('Success!');
    })
  },
  Delete: function(req, res, next){
    var instance = req.app.get('db')

    instance.delete_product([req.body.id]).then(function(){
      res.status(200).json('Success!');
    })
  }
}//end exports
