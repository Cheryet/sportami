const db = require("../index.js");

// Queries for Reviews Table

const getAllReviews = () => {
  return db
    .query(`SELECT * FROM reviews`)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getReviewsById = (id) => {
  return db
    .query(`SELECT * FROM reviews WHERE id = $1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const addReview = (review) => {
  return db.query(
    `INSERT INTO reviews (user_sport_id, winner_id, sportsmanship_rating) VALUES ($1, $2, $3)`,
    [review.user_sport_id, review.winner_id, review.sportsmanship_rating]
  );
};

const setWinner = (winner_id, review_id) => {
  return db.query(`UPDATE reviews SET winner_id = $1 WHERE = $2`, [
    winner_id,
    review_id,
  ]);
};

const getRatingForPlayer = (user_id) => {
  return db.query(
    `SELECT AVG(sportsmanship_rating) FROM reviews JOIN users_sports ON user_sport_id = users_sports.id WHERE users_sports.user_id = $1`,
    [user_id]
  );
};

module.exports = {
  getRatingForPlayer,
  getAllReviews,
  getReviewsById,
  addReview,
  setWinner,
};
