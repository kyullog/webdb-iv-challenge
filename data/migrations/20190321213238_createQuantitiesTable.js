const foreignId = (tbl, refTable, refColumn) => {
  tbl
    .integer(`${refColumn}_id`)
    .notNullable()
    .unsigned()
    .references("id")
    .inTable(refTable)
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("quantities", tbl => {
    tbl.increments();
    tbl
      .float("amount")
      .unsigned()
      .notNullable();
    foreignId(tbl, "units", "unit");
    foreignId(tbl, "ingredients", "ingredient");
    foreignId(tbl, "recipes", "recipe");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("quantities");
};
