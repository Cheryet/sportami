const express = require("express");
const router = express.Router();
const db = require("../db/queries/reviews_queries");

//
// ~~ Routes for /api/reviews ~~
//

router.get("/", (req, res) => {
  db.getAllReviews().then((data) => {
    res.send(data);
  });
});

router
  .route("/:id")
  .get((req, res) => {
    db.getReviewsById(req.params.id).then((data) => {
      res.send(data);
    });
  })
  .post((req, res) => {
    db.addReview(
      req.params.user_sport_id,
      req.params.winner_id,
      req.params.sportsmanship_rating
    )
      .then(() => {
        res.status(204).json();
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
