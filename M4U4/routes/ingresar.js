var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  console.log(req.body.valor);
  if(req.body.valor=='incorrecta'){
    req.session.valor=req.body.valor;
    res.redirect('/');
  }
  else if(req.body.valor=='correcta'){
    req.session.valor=req.body.valor;
    res.redirect('/fin');
  }
  else{
    res.redirect('/')
  }
});

module.exports = router;
