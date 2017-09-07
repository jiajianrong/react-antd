// 
//  server.js
//  <project>
//  
//  Created by licheng09 on 2017-05-25.
//  Copyright 2017 licheng09. All rights reserved.
// 

const http = require('http');
const fs = require('fs');
const path = process.cwd();

var request = require('request').defaults({jar: true});
//var qs = require('querystring');

//端口对应.roadhogrc中的代理
const hostname = '127.0.0.1';
const port = 8002;
//后台环境地址
const proxyip = 'http://192.168.187.147:8080/';

const server = http.createServer((req, res) => {
    
    
	res.statusCode = 200;
	//res.end("{aaa: 'bbb'}");
	
	request.get('http://sohu.com').pipe(res)
	
	return;
	
	
	if(req.url.indexOf("/echo/") == 0) { //模拟数据处理
		//全局json文件转发器，请在router.json中配置请求路由
		try {
			var file = path + "/data/" + getRouter()[req.url.split("/echo/")[1].split("?")[0]] + ".json";
			var result = fs.readFileSync(file);
			res.setHeader('Content-Type', 'application/json;charset=utf-8');
			res.end(result);
		} catch(e) {
			res.setHeader('Content-Type', 'text/plain;charset=utf-8');
			console.log(e.toString());
			res.end(e.toString());
		}
		return;
	} else if(req.url.indexOf("/proxy/") == 0) { //跨域代理处理
		try {
			if(req.method.toUpperCase() == 'POST') {
				var postData = "";
				req.addListener("data", function(data) {
					postData += data;
				});
				req.addListener("end", function() {
					request.post(proxyip + req.url.split("/proxy/")[1], {
						form: qs.parse(postData)
					}).pipe(res);
				});
			} else if(req.method.toUpperCase() == 'GET') {
				request.get(proxyip + req.url.split("/proxy/")[1]).pipe(res);
			}
		} catch(e) {
			res.setHeader('Content-Type', 'text/plain;charset=utf-8');
			console.log(e.toString());
			res.end(e.toString());
		}
		return;
	}
	res.setHeader('Content-Type', 'text/plain;charset=utf-8');
	res.end('Hello,请在router.json中配置请求路由。');
});

server.listen(port, hostname, () => {
	console.log(`Json Server running at http://${hostname}:${port}/`);
});

