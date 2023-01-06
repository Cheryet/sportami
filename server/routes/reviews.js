const express = require("express");
const router = express.Router();

//Routes for /api/reviews

router.get("/", (res, req) => {
  //DB Query goes here
});

router
  .route("/:id")
  .get("/:id", (res, req) => {
    //DB Query goes here
  })
  .post("/id", (res, req) => {
    //DB Query goes here
  });

module.exports = router;
