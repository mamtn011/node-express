const express = require("express");
const app = express();
const port = 3000;

//? configure ejs
app.set("view engine", "ejs");

//? using ejs
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.listen(port);
