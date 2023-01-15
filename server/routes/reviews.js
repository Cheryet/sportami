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

router.post("/new", (req, res) => {
  const user_sport_id = req.body.user_sport_id;
  const winner_id = req.body.winner_id;
  const sportsmanship_rating = req.body.sportsmanship_rating;

  let review = {
    user_sport_id,
    winner_id,
    sportsmanship_rating,
  };

  db.addReview(review)
    .then((response) => {
      res.status(200).send("Review added");
    })
    .catch((error) => {
      console.log("Failed to add review", error);
      res.status(400).send("Cannot add review");
    });
});

router.get("/:id", (req, res) => {
  db.getReviewsById(req.params.id).then((data) => {
    res.send(data);
  });
});

router.get("/rating/:id", (req, res) => {
  db.getRatingForPlayer(req.params.id).then((data) => {
    res.send(data.rows[0]);
  });
});

module.exports = router;
