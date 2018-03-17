//var express = require('express');
//var router = express.Router();
// Se reemplaza var por constant

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(res, next)=> {
  //res.render('index', { title: 'Express' });
  res.json({data:'Hellow world'});
});


router.get('/about',(res, next)=> {
  //res.render('index', { title: 'Express' });
  res.json({name:'forum-app',version:'0.1.0'});
});


module.exports = router;
