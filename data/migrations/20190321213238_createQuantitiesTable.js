exports.up = function(knex, Promise) {
  return knex.schema.createTable("quantities", tbl => {
    tbl.increments();
    tbl
      .float("amount")
      .unsigned()
      .notNullable();
    tbl
      .integer("unit_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("units")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("ingredient_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("recipe_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("quantities");
};
