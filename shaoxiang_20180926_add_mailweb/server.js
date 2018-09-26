var express = require('express');
var querystring = require('querystring');
var mailerto = require('./mailerto');
var app = express();


function startServer(){
	app.set('port', process.env.PORT || 3000);//定义访问端口

	app.use(express.logger('dev'));//打印输出请求资源

	app.use(express.static(__dirname + '/public'));//定义静态页面入口
	
	app.post('/email.html', function(req, res) {
		if (req.url === '/email.html' && req.method.toLowerCase() === 'post') {
         var alldata = '';
         req.on('data', function (chunk) {
             alldata += chunk;
         });

         req.on('end', function () {
             //res.end('success'); 
            
             //将字符串转换位一个对象
            var dataString = alldata.toString();
             //将接收到的字符串转换位为json对象
             var dataObj = querystring.parse(dataString);
             //输出数据
            mailerto.mailerTo(dataObj.u_name,dataObj.u_phone,dataObj.u_email,dataObj.u_works);//接受数据到mailto.js
             res.redirect(301, 'location.html');
        		 });

    		 };
	  });

	app.listen(app.get('port'), function() { //设置监听端口并打印输出

 	 console.log('Server listening on port %s', app.get('port'));
		});
	} 

module.exports.startServer = startServer;