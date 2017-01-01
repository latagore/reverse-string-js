"use strict";
let reverse = require("./reverse.js")
let should = require('chai').should();

describe('reverse()', function() {
  it('should reverse "hello"', function() {
    reverse("hello").should.equal("olleh");
  });
  
  it('should reverse "You are a banana!"', function() {
    reverse("You are a banana!").should.equal("!ananab a era uoY");
  });
  
  it('should reverse "Marge let a moody baby doom a telegram."', function() {
    reverse("Marge let a moody baby doom a telegram.").should.equal(".margelet a mood ybab ydoom a tel egraM");
  });
  
  it('should reverse the reverse of "Hello World!"', function () {
    reverse(reverse("Hello world!")).should.equal("Hello world!");
  });
});