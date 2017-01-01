'use strict';
let reverse = require("underscore.string/reverse");

if (!(process.argv.length > 2)){
  var node = process.argv[0].split("\\").pop(); // get only the file name with pop()
  var jsFile = process.argv[1].split("\\").pop(); // get only the file name with pop()
  console.log(`usage: ${node} ${jsFile} string-to-reverse....`)
}

let string = process.argv.slice(2).forEach(x =>
  {
     console.log(reverse(x));
  }
)