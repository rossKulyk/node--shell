const request = require("request");

// let input = process.stdin;

module.exports = function(url){
  // let input = process.stdin;

  request(url, function (error, response, body) {
   console.error('error:', error); // Print the error if one occurred
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body); // Print the HTML for the Google homepage.
 });
}
