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

router.post("/new", (req, res) => {
  console.log(req);
  const challenger_id = req.body.challenger_id;
  const opponent_id = req.body.opponent_id;
  const location = req.body.location;
  const sport_id = req.body.sport_id;
  let match = {
    challenger_id,
    opponent_id,
    location,
    sport_id,
  };

  db.addMatch(match)
    .then((response) => {
      console.log("response", response);
      res.status(200).send("Match added");
    })
    .catch((error) => {
      console.log("Failed to add match", error);
      res.status(400).send("Cannot add match");
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
    const id = parseInt(req.params.id);
    db.acceptMatch(id).then((response) => {
      console.log("response", response);
      res.status(200).send(`Match modified with id: ${id}`);
    });
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    db.deleteMatch(id).then((response) => {
      console.log("response", response);
      res.status(200).send(`Match deleted with id: ${id}`);
    });
  });

router
  .route("/:id/challenger")
  .get((req, res) => {
    db.getMatchById(req.params.id).then((data) => {
      res.send(data);
    });
  })
  .put((req, res) => {
    const id = parseInt(req.params.id);
    db.challengerReviewed(id).then((response) => {
      console.log("response", response);
      res.status(200).send(`Match modified with id: ${id}`);
    });
  });

router
  .route("/:id/opponent")
  .get((req, res) => {
    db.getMatchById(req.params.id).then((data) => {
      res.send(data);
    });
  })
  .put((req, res) => {
    const id = parseInt(req.params.id);
    db.opponentReviewed(id).then((response) => {
      console.log("response", response);
      res.status(200).send(`Match modified with id: ${id}`);
    });
  });

module.exports = router;
