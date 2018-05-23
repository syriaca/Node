// Handle HTTP route GET /  and POST / i.e. Home
function home(request, response) {
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
};
  
// Handle HTTP Route GET / username i.e. /username
function user(request, response) {
    //if url === "/....."
    var username = request.url.replace('/','')
    if(username.length > 0) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write('Header\n');
        response.write(username + '\n');
        response.end('Footer\n');
        //get json from Treehouse
        // on "end" 
            // show the profile html
        // on "error"
            // show the error html
    }  
};

module.exports.home = home;
module.exports.user = user;
