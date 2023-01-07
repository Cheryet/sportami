const express = require("express");
const router = express.Router();

//
// ~~ Routes for /api/sports ~~
//

router.get("/", (req, res) => {
  //DB Query goes here
  res.send("Hello from Sports URL 👋🏼");
});

router
  .route("/:id")
  .get((req, res) => {
    //DB Query goes here
  })

module.exports = router;
