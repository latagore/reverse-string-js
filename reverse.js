"use strict";
let reverse = require("underscore.string/reverse");

// returns a string where the characters are in reversed order
module.exports = function(string) {
  // could write the code ourselves... but better to learn how to use require instead. the algorithm is trivial anyways.
  return reverse(string);
}