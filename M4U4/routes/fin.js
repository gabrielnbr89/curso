var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('fin.hbs',{valor: req.session.valor});
});

module.exports = router;
