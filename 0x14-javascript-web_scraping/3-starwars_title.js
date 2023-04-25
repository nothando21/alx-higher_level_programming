#!/usr/bin/node
let request = require('request');
let url = 'http://swapi.co/api/films/';
request.get(url + process.argv[2] + '/', function (err, response, body) {
  if (err) {
    return console.log(err);
  } else if (response.statusCode === 200) {
    console.log(JSON.parse(body).title);
  }
});
