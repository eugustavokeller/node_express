let express = require("express");
let consign = require("consign");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./app/views");

consign()
  .include("app/routes")
  .then("config/dbConnection.js")
  .then("app/models")
  .into(app);

module.exports = app;
