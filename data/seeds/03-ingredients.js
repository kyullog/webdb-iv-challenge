exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "corn tortilla" },
        { ingredient_name: "flour tortilla" },
        { ingredient_name: "beef" },
        { ingredient_name: "egg(s)" },
        { ingredient_name: "vinegar" },
        { ingredient_name: "olive oil" },
        { ingredient_name: "butter" },
        { ingredient_name: "water" },
        { ingredient_name: "catfish" },
        { ingredient_name: "pizza dough" },
        { ingredient_name: "pepperoni" },
        { ingredient_name: "sausage" },
        { ingredient_name: "green pepper(s)" },
        { ingredient_name: "onion(s)" },
        { ingredient_name: "mushrooms" },
        { ingredient_name: "bread" },
        { ingredient_name: "dredge mix" },
        { ingredient_name: "salt" },
        { ingredient_name: "pepper" },
        { ingredient_name: "mozzarella cheese" },
        { ingredient_name: "cheddar cheese" },
        { ingredient_name: "havarti cheese" },
        { ingredient_name: "bread" },
        { ingredient_name: "ham" },
        { ingredient_name: "chicken wings" },
        { ingredient_name: "hot sauce" }
      ]);
    });
};
