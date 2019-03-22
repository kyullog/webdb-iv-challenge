const db = require("./data/dbHelper.js");

const dish = { dish_name: "Fried Wombat" };

const recipe = { recipe_name: "Spicy Wombat", dish_id: 10 };

const consoleLogger = response => console.log(response);

[
  db.getDishes(),
  db.getDish(4),
  db.addDish(dish),
  db.addRecipe(recipe),
  db.getRecipes()
].forEach(promise => promise.then(consoleLogger).catch(console.logger));
