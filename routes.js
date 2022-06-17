const url = require('url');

let fs = require('fs');

html = {
    render(path, response) {
        fs.readFile(path, null, function (error, data){
            if (error) {
                response.writeHead(404);
                response.write('File not found!');
            } else {
                response.write(data);
            }
            // end() method to show we are done handling the request
            response.end();
        });
    }
}


module.exports = {
    handleRequest(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});

        let path = url.parse(request.url).pathname;
        
        switch (path) {
            case '/':
                html.render('./index.html', response);
                break;
            case '/about':
                html.render('./about.html', response);
                break;
            case '/contact':
                html.render('./contact.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not found');
                response.end();
        }
    }
}