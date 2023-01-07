const { Pool } = require("pg");

// New Client for DB
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME || "sportami",
});

// Queries for Matches Table

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

const addMatch = (
  challenger_id,
  opponent_id,
  location_id,
  sport_id,
  accepted
) => {
  return pool.query(
    `INSERT INTO matches (challenger_id, opponent_id, location_id, sport_id, accepted) VALUES ($1, $2, $3, $4, $5)`,
    [challenger_id, opponent_id, location_id, sport_id, accepted]
  );
};

module.exports = {
  getAllMatches,
  getMatchById,
  addMatch,
};
