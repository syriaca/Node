var Profile = require('./profile.js');
var renderer = require('./renderer.js');

// Handle HTTP route GET /  and POST / i.e. Home
function home(request, response) {
    //if the url === "/" && GET
    if(request.url === "/") {
        //show search field
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        renderer.view('header',{}, response);
        renderer.view('search',{}, response);
        renderer.view('footer',{}, response);
        response.end();
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

        // Render header
        renderer.view('header',{}, response);

        //get json from Treehouse
        var studentProfile = new Profile(username);

        // on "end"
        studentProfile.on('end', function(profileJSON) {
            // Store the needed values
            var profileValues = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            // show the profile html
            renderer.view('profile',profileValues , response);            
            // Render Footer
            renderer.view('footer',{}, response);
            // Simple response
            response.end();
        });

        // on "error"
        studentProfile.on('error',function(error){
            // show the error html
            renderer.view('error',{errorMessage: error.message}, response);
            renderer.view('search',{}, response); 
            // Render Footer
            renderer.view('footer',{}, response);
            response.end();            
        });
    }  
};

module.exports.home = home;
module.exports.user = user;
