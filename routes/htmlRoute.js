var express = require('express');
var fs = require("fs");
var router = express.Router();

router.get('/index?(.html|)', function(req, res, next) {
	res.render('index', {});
});

/*html内引用文件路由, ex:jpg,js,css等*/
router.get('*.(gif|jpg|jpeg|bmp|png|js|css|ico)', function(req, res, next) {
	var path = process.cwd() + req.url;
	fs.readFile(path,function(err,stdout,stderr){
		if(!err){
			var data = stdout;
			var type = path.substr(path.lastIndexOf(".")+1,path.length)
			res.writeHead(200,{'Content-type':"text/"+type});	//在这里设置文件类型，告诉浏览器解析方式
			res.write(data);
		}
		else {
			console.log("===================================");
			console.log("errorPath : " + path);
			console.log("===================================");
		}
		res.end();
	})
});

module.exports = router;