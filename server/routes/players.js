const express = require("express");
const router = express.Router();

//Routes for api/players

router.get("/", (req, res) => {
  //DB Query goes here
});

router
  .route("/:id")
  .get("/:id", (req, res) => {
    //DB Query goes here
  })
  .put("/:id", (req, res) => {
    //DB Query goes here
  })
  .post("/id", (req, res) => {
    //DB Query goes here
  });

module.exports = router;
