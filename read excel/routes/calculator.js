const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.get('/',function(req,res,next){
	res.render('login',{
		title :'express',
		name : 'Raghav'
	});
});
router.post('/', urlencodedParser, function (req, res) {
	console.log(req.body);
	let a =req.body.fv;
	let b =req.body.sv;
	res.send(a+b);
//  res.send('welcome, ' + req.body.user);
})
module.exports= router;