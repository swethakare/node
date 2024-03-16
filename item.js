const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const pathname = "." + url.parse(req.url).pathname;
    console.log(pathname);
    fs.readFile(pathname, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("404 Request Not Found");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(8081);
