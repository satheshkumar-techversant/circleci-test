const http = require('http');

http.createServer(function(req, res) {
    res.write('new push!');
    res.end();
}).listen(8080, '0.0.0.0');