var http = require('http');
var fs = require('fs');
var Event = require('events').EventEmitter;
//require('./result');
var server = http.createServer(function (req, res) {
  if (req.url === '/about') {
    console.log(req);
    res.end('hello');
  } else if (req.url === '/stop') {
    server.close(function () {
      console.log('server is closed');
      res.end('bye');
    });
server.emit('close');
} else  if (req.url === '/contact') {
  fs.readFile('index.html', function (err, data) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(data);
  res.end();
});
} else {
  res.write(req.url);
  res.end();
}
}).listen(3000);
