
exports.up = function (knex) {
  return knex.schema.createTable('sourcesOfUserRegistration', function (table) {
    table.increments('userId');
    table.tinyint('source').notNullable();
    table.string('uniqueId').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('sourcesOfUserRegistration');
};
