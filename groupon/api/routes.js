var express = require("express");
var router = express.Router();
const fs = require("fs");
const factory = require("./factory");
var bodyParser = require("body-parser");

router.get("/books", function(req, res) {
  let jsonData = {};
  fs.readFile("books.json", "utf-8", (err, data) => {
    if (err) res.send(jsonData);
    else {
      return res.send(JSON.parse(data));
    }
  });
});

router.post("/books", function(req, res) {
  let jsonData = {};
  fs.readFile("books.json", "utf-8", (err, data) => {
    if (err) res.send(jsonData);
    else {
      data = factory.createBook(req, data);
      fs.writeFileSync("books.json", JSON.stringify(data));
      res.send(data);
    }
  });
});

router.put("/books/:id", function(req, res) {
  let jsonData = {};
  fs.readFile("books.json", "utf-8", (err, data) => {
    if (err) res.send(jsonData);
    else {
      data = factory.updateBook(req, data);
      fs.writeFileSync("books.json", JSON.stringify(data));
      res.send(data);
    }
  });
});

module.exports = router;
