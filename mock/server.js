const http = require('http');
const fs = require('fs');
const URL = require('url');
//let request = require('request').defaults({jar: true});
//let qs = require('querystring');


const HOSTNAME = '127.0.0.1';
const PORT = 8002;



const getMockFilePath = (req) => (__dirname + URL.parse(req.url).pathname + '.' + req.method + '.json')



http.createServer((req, res) => {
    if ( req.url.indexOf('favicon.ico') != -1 ) {
        return '';
    }
    
    let filePath = getMockFilePath(req);
    
    // 必须前置，否则中文乱码
    res.setHeader('Content-Type', 'application/json; charset="utf-8');
    
    // pipe mock文件
    fs.createReadStream(filePath, {encoding: 'utf8'})
        .on('finish', ()=>{
            res.statusCode = 200;
        })
        .on('error', (e)=>{
            res.statusCode = 404;
            res.end(e.toString());
        })
        .pipe(res);
})
.listen(PORT, HOSTNAME, () => {
	console.log(`Json Server running at http://${HOSTNAME}:${PORT}/`);
});

