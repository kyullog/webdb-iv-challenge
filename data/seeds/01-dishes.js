exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { dish_name: "Yummy Tacos" },
        { dish_name: "Supreme Pizza" },
        { dish_name: "Eggs" },
        { dish_name: "S&P Catfish" },
        { dish_name: "Hot Wings" },
        { dish_name: "Grilled Sandwich" }
      ]);
    });
};
