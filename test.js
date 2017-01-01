var reverse = require("./reverse.js")

if (reverse("hello") !== "olleh") {
  throw new Exception("hello test failed");
}