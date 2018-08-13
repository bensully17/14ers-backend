// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/fourteeners'
  },

  production: {
    client: 'pg',
    connection: ''
  }

};
