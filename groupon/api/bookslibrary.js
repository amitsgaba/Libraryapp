var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var router = require("./routes");
var cors = require("cors");

app.use(bodyParser.json());

app.use("/api", cors(), router);

var server = app.listen(3001, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("app listening at http://%s:%s", host, port);
});
