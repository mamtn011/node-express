## ejs

### ejs is a template engine for node.js

1. install ejs
   npm i ejs

2. configure ejs
   app.set("view engine", "ejs")

3. make a folder named "views"

4. create ejs file into views folder
   index.ejs / contact.ejs / about.ejs

5. use ejs file
   app.get("/profile", (req, res) => {
   res.render("index/contact/about");
   });
