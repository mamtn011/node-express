# Static files

### adding static file (image, css, js)

1. make a folder named "public"

2. create three folders inside public
   images, stylesheets, javascripts

3. configure express static in js file

```js
app.use(express.static("./public"));
// added in ejs.js
```

4. understanding path
   ```html
   <link rel="stylesheet" href="../stylesheets/ejs_index.css" />
   <!-- no need to mention public -->
   <!-- <link rel="stylesheet" href="../public/stylesheets/ejs_index.css" /> -->
   ```
