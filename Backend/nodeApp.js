var http = require('http');
var mymodule = require('./mymodule')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`Hello World! ${mymodule.myDateTime()}`);
}).listen(8080);