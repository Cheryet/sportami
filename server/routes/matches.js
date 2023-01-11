const express = require("express");
const router = express.Router();
const db = require("../db/queries/matches_queries");

//
// ~~ Routes for /api/matches ~~
//

router.get("/", (req, res) => {
  db.getAllMatches().then((data) => {
    res.send(data);
  });
});

router
  .route("/:id")
  .get((req, res) => {
    db.getMatchById(req.params.id).then((data) => {
      res.send(data);
    });
  })
  .put((req, res) => {
    const id = parseInt(req.params.id)
    db.acceptMatch(id).then((response) => {
      console.log("response", response);
      res.status(200).send(`Match modified with id: ${id}`);
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
    })
  .delete((req, res) => {
    const id = parseInt(req.params.id)
    db.deleteMatch(id).then((response) => {
      console.log("response", response);
      res.status(200).send(`Match deleted with id: ${id}`);
    });
  })
    

module.exports = router;
