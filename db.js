const Pool = require("pg").Pool

const pool = new Pool({
  server: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_URL,
  port: 5432,
})

module.exports = pool
