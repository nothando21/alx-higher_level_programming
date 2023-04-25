#!/usr/bin/node
// Script that prints the title of a Star Wars movie where the episode number matches a given integer
let request = require('request');
let url = process.argv[2];
let count = 0;
request.get(url, function (err, response, body) {
  if (err) {
    return console.log(err);
  } else if (response.statusCode === 200) {
    let films = JSON.parse(body).results;
    for (let film of films) {
      for (let character of film.characters) {
        if (character.includes('/18/')) {
          count += 1;
        }
      }
    }
    console.log(count);
  }
});
