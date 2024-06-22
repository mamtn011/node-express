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

//! error handling
//* make an error page and route
app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

//* write this errorHandler function inside app.use() after all routes
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(port);
