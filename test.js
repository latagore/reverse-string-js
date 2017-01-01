"use strict";
let reverse = require("./reverse.js")
let should = require('chai').should();

describe('reverse()', function() {
  it('should return olleh when using hello', function() {
    reverse("hello").should.equal("olleh");
  });
});