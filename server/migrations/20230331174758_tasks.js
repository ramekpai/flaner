
exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id');
    table.string('name').notNullable();
    table.text('description');
    table.smallint('state').notNullable().unsigned();
    table.smallint('status').notNullable().unsigned();
    table.timestamp('created', {useTz: false}).notNullable().defaultTo(knex.fn.now());
    table.timestamp('deleted', {useTz: false});
    table.mediumint('assignee').notNullable();
    table.timestamp('deadline', {useTz: false});
    table.smallint('group').unsigned();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('tasks');
};
