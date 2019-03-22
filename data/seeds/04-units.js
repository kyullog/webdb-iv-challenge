exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("units")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("units").insert([
        { unit_name: "tablespoon" },
        { unit_name: "teaspoon" },
        { unit_name: "cup" },
        { unit_name: "quart" },
        { unit_name: "gram" },
        { unit_name: "ounce" },
        { unit_name: "pound" },
        { unit_name: "each" },
        { unit_name: "slice" },
        { unit_name: "pinch" }
      ]);
    });
};
