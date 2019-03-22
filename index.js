const db = require("./data/dbHelper.js");

db.getDishes()
  .then(dishes => console.log(dishes))
  .catch(err => console.log(err));
