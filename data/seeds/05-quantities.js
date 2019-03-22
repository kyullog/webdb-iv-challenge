exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("quantities")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("quantities").insert([
        { amount: 3, unit_id: 8, ingredient_id: 1, recipe_id: 1 },
        { amount: 1, unit_id: 3, ingredient_id: 3, recipe_id: 1 },
        { amount: 0.75, unit_id: 3, ingredient_id: 21, recipe_id: 1 },
        { amount: 3, unit_id: 8, ingredient_id: 2, recipe_id: 2 },
        { amount: 1, unit_id: 3, ingredient_id: 3, recipe_id: 2 },
        { amount: 0.75, unit_id: 3, ingredient_id: 21, recipe_id: 2 },
        { amount: 2, unit_id: 8, ingredient_id: 4, recipe_id: 3 },
        { amount: 2, unit_id: 8, ingredient_id: 4, recipe_id: 4 },
        { amount: 2, unit_id: 8, ingredient_id: 4, recipe_id: 5 },
        { amount: 1, unit_id: 1, ingredient_id: 5, recipe_id: 4 },
        { amount: 0.65, unit_id: 7, ingredient_id: 9, recipe_id: 6 },
        { amount: 0.65, unit_id: 7, ingredient_id: 9, recipe_id: 7 },
        { amount: 2, unit_id: 3, ingredient_id: 17, recipe_id: 6 },
        { amount: 1.5, unit_id: 1, ingredient_id: 6, recipe_id: 7 },
        { amount: 1, unit_id: 2, ingredient_id: 18, recipe_id: 6 },
        { amount: 1, unit_id: 2, ingredient_id: 19, recipe_id: 6 },
        { amount: 10, unit_id: 8, ingredient_id: 25, recipe_id: 9 },
        { amount: 2, unit_id: 3, ingredient_id: 17, recipe_id: 9 },
        { amount: 1, unit_id: 3, ingredient_id: 26, recipe_id: 9 }
      ]);
    });
};
