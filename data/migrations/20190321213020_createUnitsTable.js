exports.up = function(knex, Promise) {
  return knex.schema.createTable("units", tbl => {
    tbl.increments();
    tbl.string("unit_name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("units");
};
