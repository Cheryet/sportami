const express = require("express");
const router = express.Router();
const db = require("../db/queries/sports");

//
// ~~ Routes for /api/sports ~~
//

router.get("/", (req, res) => {
  db.getAllSports().then((data) => {
    res.send(data);
  });
});

router.get("/:id", (req, res) => {
  db.getSportById(req.params.id).then((data) => {
    res.send(data);
  });
});

module.exports = router;
