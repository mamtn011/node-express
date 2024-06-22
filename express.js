const express = require("express");
const app = express();
const port = 3000;

//! middleware
app.use((req, res, next) => {
  console.log("middleware will be run before every route");
  next();
});

//? configure ejs
app.set("view engine", "ejs");
//! making route
app.get("/about", (req, res) => {
  res.send("Hello World!");
});
app.get("/profile", (req, res) => {
  res.send("Hello from profile!");
});
//? using ejs
app.get("/", (req, res) => {
  res.render("index");
});
//! dynamic route
app.get("/profile/:username", (req, res) => {
  res.send(`Hello Mr/Mis ${req.params.username}`);
});

//! define server port number
app.listen(port);
