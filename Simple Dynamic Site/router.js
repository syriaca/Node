var Profile = require("./profile.js");

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

        //get json from Treehouse
        var studentProfile = new Profile(username);

        // on "end"
        studentProfile.on("end", function(profileJSON){
            // show the profile html
            // Store the vales which we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javaScriptPoints: profileJSON.points.JavaScript
            }
            // Simple response            
            response.write(values.username+': has '+values.badges+' badges\n');
            response.end('Footer\n');
        });
        // on "error"
        studentProfile.on("error",function(error){
            // show the error html
            response.write(error.message + '\n');
            response.end('Footer\n');
        });


    }  
};

module.exports.home = home;
module.exports.user = user;
