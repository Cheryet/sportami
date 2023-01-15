const db = require("../index.js");
// Queries for Matches Table

//This query gets all matches
const getAllMatches = () => {
  return db
    .query(`SELECT * FROM matches ORDER BY created_at DESC`)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

//This query is for getting a single match based on ID
const getMatchById = (id) => {
  return db
    .query(`SELECT * FROM matches WHERE id = $1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

//This query is for creating a match
const addMatch = (match) => {
  return db.query(
    `INSERT INTO matches (challenger_id, opponent_id, location, sport_id, accepted) VALUES ($1, $2, $3, $4, FALSE)`,
    [match.challenger_id, match.opponent_id, match.location, match.sport_id]
  );
};

//This query is for when a match is accepted
const acceptMatch = (id) => {
  return db.query(
    `
    UPDATE matches
    SET accepted = true
    WHERE id = $1
    returning *;`,
    [`${id}`]
  );
};

//This query is for when a match is accepted
const challengerReviewed = (id) => {
  return db.query(
    `
    UPDATE matches
    SET challenger_reviewed = true
    WHERE id = $1
    returning *;`,
    [`${id}`]
  );
};

//This query is for when a match is accepted
const opponentReviewed = (id) => {
  return db.query(
    `
    UPDATE matches
    SET opponent_reviewed = true
    WHERE id = $1
    returning *;`,
    [`${id}`]
  );
};

//This query is for when a match is deleted
const deleteMatch = (id) => {
  return db.query(
    `
    DELETE FROM matches
    WHERE id = $1
    returning *;`,
    [`${id}`]
  );
};

//Exports
module.exports = {
  getAllMatches,
  getMatchById,
  addMatch,
  acceptMatch,
  deleteMatch,
  challengerReviewed,
  opponentReviewed,
};
