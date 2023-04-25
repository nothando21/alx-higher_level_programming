#!/usr/bin/node
// Script that computes the number of tasks completed by user id
let request = require('request');
request.get(process.argv[2], function (err, response, body) {
  if (err) {
    return console.log(err);
  } else if (response.statusCode === 200) {
    let tasks = JSON.parse(body);
    let done = {};
    for (let task of tasks) {
      if (task.completed === true) {
        if (task.userId in done) {
          done[task.userId] += 1;
        } else {
          done[task.userId] = 1;
        }
      }
    }
    console.log(done);
  }
});
