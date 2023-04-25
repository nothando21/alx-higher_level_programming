#!/usr/bin/node
// Script that prints all characters of a Star Wars movie:
let request = require('request');
let url = 'http://swapi.co/api/films/' + process.argv[2];
request.get(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    let films = JSON.parse(body);
    let characterList = [];
    for (let character of films.characters) {
      characterList.push(new Promise(function (resolve, reject) {
        request.get(character, function (err, response, body) {
          if (err) {
            console.log(err);
          } else if (response.statusCode === 200) {
            resolve(JSON.parse(body).name);
          } else { reject(Error('Unknown')); }
        });
      }));
    }
    Promise.all(characterList).then(function (names) {
      names.forEach(function (name) {
        console.log(name);
      });
    });
  }
});
