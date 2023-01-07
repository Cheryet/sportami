const express = require("express");
const router = express.Router();
const db = require("../db/queries/users_sports");

//
// ~~ Routes for /api/user_sports ~~
//

router.get("/", (req, res) => {
  db.getAllUserSports().then((data) => {
    res.send(data);
  });
});

router
  .route("/:id")
  .get((req, res) => {
    db.getUserSportsById(req.params.id).then((data) => {
      res.send(data);
    });
  })
  .post((req, res) => {
    db.addUserSports(user_id, sport_id, self_skill)
      .then(() => {
        res.status(204);
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
