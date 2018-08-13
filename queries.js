const knex = require('./knex')

module.exports = {
    getAll14ers() {
        return knex('fourteeners')
    }
}