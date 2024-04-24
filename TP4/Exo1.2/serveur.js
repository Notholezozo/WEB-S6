'use strict';

function site(url, arg){
    return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>BONJOUR</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
<body>
<p>
Analyse de votre requête:
</p>
<p> 
Vous accédez à l'url: ${url}
</p>
<p>
La chaine de requête est: ${arg}

</p>
</body>
</html>`;
}

const http = require('http');
const server = http.createServer( (request, response) => {
    const url = request.url.split('?')[0];
    const arg = request.url.split('?')[1];
    const body = site(url, arg);



    if (request.method === 'GET') {
        response.writeHead(200, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/html',
        });
        response.write(body);

    }
    else response.writeHead(405);
    response.end();
});

server.listen(8080,
    () => {
        console.log('mmmmmh');
    },
);
