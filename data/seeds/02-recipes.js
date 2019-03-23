exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Crunchy Tacos", dish_id: 1 },
        { recipe_name: "Soft Tacos", dish_id: 1 },
        { recipe_name: "Scrambled Eggs", dish_id: 3 },
        { recipe_name: "Poached Eggs", dish_id: 3 },
        { recipe_name: "Sunny-side-up Eggs", dish_id: 3 },
        { recipe_name: "Fried Catfish", dish_id: 4 },
        { recipe_name: "Broiled Catfish", dish_id: 4 },
        { recipe_name: "Supreme Pizza", dish_id: 2 },
        { recipe_name: "Breaded Wings", dish_id: 5 },
        { recipe_name: "Naked Wings", dish_id: 5 },
        { recipe_name: "Hot Ham N' Cheese", dish_id: 6 },
        { recipe_name: "Havarti Grilled Cheese", dish_id: 6 }
      ]);
    });
};
