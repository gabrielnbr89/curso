var express = require('express');
/* const app = require('../app'); */
var router = express.Router();

router.get('/', function(req, res) {
  var opcion = Boolean(req.session.valor)
  res.render('index', {
    title: 'Sesiones',
    opcion: opcion,
    valor: req.session.valor
  });
});

module.exports = router;
