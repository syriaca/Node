const fs = require('fs');

function view(templateName, values, response){
  // Read from the template file
  var fileContents = fs.readFileSync('./views/'+templateName+'.html');  
  // insert values in to the content

  // Write out the contents to the response
  response.write(fileContents);
}

module.exports.view = view;