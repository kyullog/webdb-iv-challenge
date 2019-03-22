const db = require("./dbConfig.js");

module.exports = {
  getDishes: () => {
    return db("dishes");
  },

  getDish: id => {
    return db("dishes")
      .where({ id })
      .first();
  },

  getRecipes: () => {
    return db("recipes")
      .select("recipes.id", "recipe_name as recipe", "dishes.dish_name")
      .innerJoin("dishes", "recipes.dish_id", "dishes.id");
  },

  addDish: dish => {
    return db("dishes").insert(dish);
  },

  addRecipe: recipe => {
    return db("recipes").insert(recipe);
  }
};
