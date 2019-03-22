const db = require("./data/dbHelper.js");

db.getDishes()
  .then(dishes => console.log(dishes))
  .catch(err => console.log(err));

db.getDish(4)
  .then(dish => console.log(dish))
  .catch(err => console.log(err));

const dish = { dish_name: "Fried Wombat" };

db.addDish(dish)
  .then(response => console.log(response))
  .catch(err => console.log(err));

const recipe = { recipe_name: "Spicy Wombat", dish_id: 10 };

db.addRecipe(recipe)
  .then(response => console.log(response))
  .catch(err => console.log(err));

db.getRecipes()
  .then(recipes => console.log(recipes))
  .catch(err => console.log(err));
