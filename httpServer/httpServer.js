const http = require('http');
// DOES NOT WORK OUTSIDE OF LOCAL HOST.... 
const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server \'http\' now testing on 127.0.0.1 !!');
});

server.listen(port, hostname, () => {
    console.log(`TM test server running at http://${hostname}:${port}/`);
});