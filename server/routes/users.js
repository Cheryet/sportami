const express = require("express");
const router = express.Router();
const db = require("../db/queries/users");

//
// ~~ Routes for api/users ~~
//

router.get("/", (req, res) => {
  db.getAllUsers().then((data) => {
    res.send(data);
  });
});

router
  .route("/:id")
  .get((req, res) => {
    db.getUserById(req.params.id).then((data) => {
      res.send(data);
    });
  })
  .put((req, res) => {
    db.updateLocation(req.params.location, req.params.user_id)
      .then(() => {
        res.status(204);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .post((req, res) => {
    db.addUser(
      req.params.username,
      req.params.password,
      req.params.email,
      req.params.bio,
      req.params.location,
      req.params.gender,
      req.params.age,
      req.params.profile_pic
    )
      .then(() => {
        res.status(204);
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
