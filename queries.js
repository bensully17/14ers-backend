const knex = require('./knex')

module.exports = {
    getAll14ers() {
        return knex('fourteeners')
    },
    getOne(rank) {
        return knex('fourteeners')
        .where('rank', rank)
    }
}