
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port : 5432,
      database: 'flaner',
      user: 'finalyfin',
      password: 'postgres'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PG_CONNECTION_HOST,
      port : process.env.PG_CONNECTION_PORT,
      database: process.env.PG_CONNECTION_DATABASE,
      user: process.env.PG_CONNECTION_USER,
      password: process.env.PG_CONNECTION_PASSWORD
    }
  }
};
