const db = require("./data/dbHelper.js");

db.getDishes()
  .then(dishes => console.log(dishes))
  .catch(err => console.log(err));

db.getDish(4)
  .then(dish => console.log(dish))
  .catch(err => console.log(err));
