const http = require('http');

// using the  file  system to fetch the html file
const fs = require('fs');
// creating a server

let handleRequest = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(handleRequest).listen(4000);