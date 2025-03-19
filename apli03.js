const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf-8', (error, html) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    });
});

server.listen(port, host, () => {
    console.log("Servidor funcionando en", host, port);
});