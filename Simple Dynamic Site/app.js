// Problem: we need a simple ay to look at a user's badge count and JavaScript point from a web browser
// Solution: use Node.js to perform the profile look ups and serve our template via HTTP

// 1. Create a web server

const http = require('http');

const port = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.end('Hello World!\n');
}).listen(port);
console.log(`Server running at http://:${port}/`);


// 2. Handle HTTP route GET /  and POST / i.e. Home
  //if the url === "/" && GET
    //show search field
  //if url === "/" && POST
    // redirect to /username

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
