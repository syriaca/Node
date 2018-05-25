var Profile = require('./profile.js');
var renderer = require('./renderer.js');
var querystring = require('querystring');
var commonHeaders = {'Content-Type': 'text/html'};


// Handle HTTP route GET /  and POST / i.e. Home
function home(request, response) {
    //if the url === '/' && GET
    if(request.url === '/') {
        if(request.method.toLowerCase() === 'get') {
            //show search field
            response.writeHead(200, commonHeaders);
            renderer.view('header', {}, response);
            renderer.view('search', {}, response);
            renderer.view('footer', {}, response);
            response.end();
        } else {
            //if url === '/' && POST
            if(request.url === '/') {
                if(request.method.toLowerCase() === 'post') {
                    // get the post data from body
                    request.on('data', function(postBody){
                        // extract the username
                        var query =  querystring.parse(postBody.toString());
                        response.write(query.username);
                        response.end();
                        // redirect to /:username
                    });
                }
            }             
        }
    }
        // redirect to /username
};
  
// Handle HTTP Route GET / username i.e. /username
function user(request, response) {

    //if url === '/.....'
    var username = request.url.replace('/','')
    if(username.length > 0) {
        response.writeHead(200, commonHeaders);

        // Render header
        renderer.view('header', {} , response);

        //get json from Treehouse
        var studentProfile = new Profile(username);

        // on 'end'
        studentProfile.on('end', function(profileJSON) {
            // Store the needed values
            var profileValues = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            // show the profile html
            renderer.view('profile', profileValues, response);            
            // Render Footer
            renderer.view('footer', {}, response);
            // Simple response
            response.end();
        });

        // on 'error'
        studentProfile.on('error',function(error){
            // show the error html
            renderer.view('error',{errorMessage: error.message}, response);
            renderer.view('search', {}, response); 
            // Render Footer
            renderer.view('footer', {}, response);
            response.end();            
        });
    }  
};

module.exports.home = home;
module.exports.user = user;