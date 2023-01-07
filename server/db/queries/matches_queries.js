const { Pool } = require("pg");

// New Client for DB
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME || "sportami",
});

// Queries for Matches Table

//This query gets all matches
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

//This query is for getting a single match based on ID
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

//This query is for creating a match
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

//This query is for when a match is accepted
const setOpponent = (opponent_id, match_id) => {
  return pool.query(
    `UPDATE matches SET opponent_id = $1, accepted = true WHERE id = $2`,
    [opponent_id, match_id]
  );
};

//Exports
module.exports = {
  getAllMatches,
  getMatchById,
  addMatch,
  setOpponent,
};
