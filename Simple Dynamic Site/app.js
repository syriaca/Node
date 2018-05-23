// Problem: we need a simple ay to look at a user's badge count and JavaScript point from a web browser
// Solution: use Node.js to perform the profile look ups and serve our template via HTTP

// 1. Create a web server

const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((request, response) => {
  homeRoute(request, response);
}).listen(port)
  console.log(`Server running at http://${hostname}:${port}/`);

// 2. Handle HTTP route GET /  and POST / i.e. Home
function homeRoute(request, response) {
  //if the url === "/" && GET
  if(request.url === "/") {
    //show search field
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
  }


  //if url === "/" && POST
    // redirect to /username
}

// 3. Handle HTTP Route GET / username i.e. /username
  //if url === "/....."
    //get json from Treehouse
      // on "end" 
        // show the profile html
      // on "error"
        // show the error html

// 4. Function that handle the reading of files and merge in values
  // read from file and get a string
    // merge values into string
