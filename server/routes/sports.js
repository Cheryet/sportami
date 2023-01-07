const express = require("express");
const router = express.Router();

//
// ~~ Routes for /api/sports ~~
//

module.exports = db => {
  router.get("/sports", (request, response) => {
    db.query(`
      SELECT * FROM sports
    `)
      .then(({ rows: sports }) => {
        response.json(sports);
      });
  });

  return router;
};