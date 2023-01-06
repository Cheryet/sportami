const express = require("express");
const router = express.Router();

//
// ~~ Routes for api/players ~~
//

router.get("/", (req, res) => {
  //DB Query goes here
});

router
  .route("/:id")
  .get((req, res) => {
    //DB Query goes here
  })
  .put((req, res) => {
    //DB Query goes here
  })
  .post((req, res) => {
    //DB Query goes here
  });

module.exports = router;
