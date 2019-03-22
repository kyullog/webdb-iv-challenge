exports.up = function(knex, Promise) {
  return knex.schema.createTable("units", tbl => {
    tbl.increments();
    tbl
      .string("unit_name")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("units");
};
