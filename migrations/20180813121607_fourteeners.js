
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fourteeners', (table) => {
      table.increments()
      table.text('name')
      table.integer('elevation')
      table.integer('rank')
      table.integer('class')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fourteeners')
};
