'use strict';
const http = require("http");
const server = http.createServer( (request, response) => {
    response.writeHead(200);
    response.write('Bonjour tout le monde!');
    response.end();
})

server.listen(8080);