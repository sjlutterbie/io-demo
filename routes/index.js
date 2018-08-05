var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IO Demo' });
});

/* GET project page */
router.get('/project', function(req,res,next) {
   res.render('project', {title: 'Project title'}); 
});

module.exports = router;
