#!/usr/bin/node
let request = require('request');
let fs = require('fs');
request.get(process.argv[2], function (err, response, body) {
  if (err) {
    return console.log(err);
  } else if (response.statusCode === 200) {
    fs.writeFile(process.argv[3], body, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
});
