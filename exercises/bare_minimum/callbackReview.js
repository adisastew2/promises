/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {

  fs.readFile(filePath, 'utf8', (err, content) =>{ 
    if (err) {
      // console.log('fs.readFile failed :(\n', err);
      cb(err, null);
    } else {
      // console.log('fs.readFile successfully completed :)\n', content);
      var firstLine = content.split('\n');
      cb(err, firstLine[0]);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  
  request(url, function (err, res, body) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res.statusCode);
    }
  
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
