var express = require('express');
var multer = require( 'multer' );
// var { wrap: async } = require( 'co' );
var router = express.Router();

// upload path
var upload = multer({ dest: '../data' })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.single('userfile'), function(req, res){
  // res.send(req.file)

});
module.exports = router;