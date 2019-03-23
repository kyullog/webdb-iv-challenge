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
  },

  getRecipe: async id => {
    try {
      const dish = await db("recipes")
        .select("dishes.dish_name")
        .innerJoin("dishes", "recipes.dish_id", "dishes.id")
        .where({ "recipes.id": id })
        .first();
      const recipe = await db("recipes")
        .select("recipe_name")
        .where({ id })
        .first();
      const ingredients = await db("quantities")
        .select("amount", "unit_name", "ingredient_name")
        .innerJoin("units", "units.id", "quantities.unit_id")
        .innerJoin("ingredients", "ingredients.id", "ingredient_id")
        .where({ recipe_id: id });
      return {
        recipe: recipe.recipe_name,
        dish: dish.dish_name,
        ingredients: ingredients
      };
    } catch (err) {
      return err;
    }
  }
};
