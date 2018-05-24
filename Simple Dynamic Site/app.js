// Problem: we need a simple ay to look at a user's badge count and JavaScript point from a web browser
// Solution: use Node.js to perform the profile look ups and serve our template via HTTP

// Dépendencies
var router = require('./router.js');
// Create a web server
const http = require('http');
const hostname = 'http://127.0.0.1';
const port = 8000;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
}).listen(port)
  console.log(`Server running at http://${hostname}:${port}/`);

// Function that handle the reading of files and merge in values
  // read from file and get a string
    // merge values into string
