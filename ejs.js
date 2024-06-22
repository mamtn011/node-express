const express = require("express");
const app = express();
const port = 3000;

//? configure ejs
app.set("view engine", "ejs");
//? configure static file
app.use(express.static("./public"));
//? using ejs
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.listen(port);
