# To view the practice file go to lolopopo repo on github

1. install mongodb
   download and install from mongodb->product->community edition->community server.

2. install mongoosejs

```
npm i mongoose
```

3. require and setup connection

```js
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db_name");
```

4. make schema (single entry)

```js
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});
```

5. create model (collection) and export

```js
module.exports = mongoose.model(model_name, schema);
```

5. import the model and make actions like CRUD and etc

```js
// see index.js file in lolopopo
const userModel = require("./users");
```
