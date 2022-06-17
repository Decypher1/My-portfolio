const http = require('http');

const router = require('./routes');

let handleRequest = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
}

http.createServer(router.handleRequest).listen(4000);