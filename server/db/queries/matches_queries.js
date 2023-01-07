const { Pool } = require("pg");

// New Client for DB
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME || "sportami",
});

const getAllMatches = () => {
  return pool
    .query(`SELECT * FROM matches`)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getMatchById = (id) => {
  return pool
    .query(`SELECT * FROM matches WHERE id = $1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {
  getAllMatches,
  getMatchById,
};
