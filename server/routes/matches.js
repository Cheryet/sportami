const express = require("express");
const router = express.Router();
const db = require("../db/queries/matches_queries");

//
// ~~ Routes for /api/matches ~~
//

router.get("/", (req, res) => {
  db.getAllMatches().then((data) => {
    const matches = data;
    res.send(matches);
  });
});

router
  .route("/:id")
  .get((req, res) => {
    db.getMatchById(req.params.id).then((data) => {
      const match = data;
      res.send(match);
    });
  })
  .put((req, res) => {
    db.setOpponent(req.body.opponent_id, req.body.match_id).then(() => {
      res.send(204).json();
    });
  })
  .post((req, res) => {
    db.addMatch(
      req.body.challenger_id,
      req.body.opponent_id,
      req.body.location_id,
      req.body.sport_id,
      req.body.accepted
    )
      .then(() => {
        res.status(204).json();
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
