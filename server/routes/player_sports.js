const express = require("express");
const router = express.Router();

//
// ~~ Routes for /api/player_sports ~~
//

router.get("/", (req, res) => {
  //DB Query goes here
  res.send("Hello from Player_Sports URL 👋🏼");
});

router
  .route("/:id")
  .get((req, res) => {
    //DB Query goes here
  })
  .post((req, res) => {
    //DB Query goes here
  });

module.exports = router;
