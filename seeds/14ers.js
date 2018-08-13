
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fourteeners').del()
    .then(function () {
      // Inserts seed entries
      return knex('fourteeners').insert([
        {id: 1, name: 'Mt. Elbert', elevation: 14433, rank: 1},
        {id: 2, name: 'Mt. Massive', elevation: 14421, rank: 2},
        {id: 3, name: 'Mt. Harvard', elevation: 14420, rank: 3}
      ]);
    });
};
