const express = require("express");
const router = express.Router();

//
//Routes for /api/reviews
//

router.get("/", (res, req) => {
  //DB Query goes here
  res.send("Hello from Reviews URL 👋🏼");
});

router
  .route("/:id")
  .get((res, req) => {
    //DB Query goes here
  })
  .post((res, req) => {
    //DB Query goes here
  });

module.exports = router;
