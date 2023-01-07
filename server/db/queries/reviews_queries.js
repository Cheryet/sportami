const db = require('../index.js');

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

const addReview = (user_sport_id, winner_id, sportsmanship_rating) => {
  return db.query(
    `INSERT INTO reviews (user_sport_id, winner_id, sportsmanship_rating) VALUES ($1, $2, $3)`,
    [user_sport_id, winner_id, sportsmanship_rating]
  );
};

const setWinner = (winner_id, review_id) => {
  return db.query(`UPDATE reviews SET winner_id = $1 WHERE = $2`, [
    winner_id,
    review_id,
  ]);
};

module.exports = {
  getAllReviews,
  getReviewsById,
  addReview,
  setWinner,
};
