const express = require("express");
const router = express.Router();
const db = require("../db/queries/users");

//
// ~~ Routes for /api/login ~~
//

router.post("/", (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ message: "Need email/username and password" });
  }
  db.getUserByLoginDetails(req.body.email, req.body.password)
    .then((data) => {
      if (data.length > 0) {
        res.status(200).send({ success: true });
      } else {
        res.status(401).send({ message: "Invalid email/username or password" });
      }
    });
});

module.exports = router;
