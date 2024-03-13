const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'tino07',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'backend-b'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};