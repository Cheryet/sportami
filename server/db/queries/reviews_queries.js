const { Pool } = require("pg");

// New Client for DB
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME || "sportami",
});
