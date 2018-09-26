const http = require('http');
const hostname = '127.0.0.1';
const port = 3031;
const dt = require('./httpModule');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.writeHead(200, {'Content-Type':'text/plain'});
  res.setHeader('Content-type', 'text/html');
  res.write("Current Date and Time: " + dt.currentDateTime());
  res.end('<h2>Now Serving ...</h2><br>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})