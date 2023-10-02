const http = require('http');
//first parameter req -> incoming request
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('here is our short history');
  }
  res.end(`<h1>Oops!</h1>`);
  // res.write('welcome to our home page'); // sends bak response
  // res.end(); //ends request
});
server.listen(5000);
