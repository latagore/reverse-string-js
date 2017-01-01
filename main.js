'use strict';
let reverse = require("./reverse.js");

if (process.argv.length === 2){
  var node = process.argv[0].split("\\").pop(); // get only the file name with pop()
  var jsFile = process.argv[1].split("\\").pop(); // get only the file name with pop()
  console.log(`usage: ${node} ${jsFile} string-to-reverse....`)
  return 1;
}

let args = process.argv.slice(2);
let string = args.join(" ");
console.log(reverse(string));