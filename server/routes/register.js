const express = require("express");
const router = express.Router();
const user = require("../db/queries/users");
const sports = require("../db/queries/sports");
const users_sports = require("../db/queries/users_sports");


//
// ~~ Routes for api/register ~~
//

router.post("/", (req, res) => {
  const userSports = req.body.sports;
  user.addUser(
    req.body.username,
    req.body.first_name,
    req.body.password,
    req.body.email,
    req.body.bio,
    req.body.location,
    req.body.gender,
    req.body.age,
    req.body.profile_pic
  )
    .then((user) => {
      const newUser = user["rows"][0];
      sports.getAllSports()
        .then((sports) => {
          const userSportsWithId = sports.filter(sport => {
            return userSports.find(userSport => userSport.sport === sport.name);
          }).map(sport => {
            const matchingObject = userSports.find(userSport => userSport.sport === sport.name);
            return { ...sport, ...matchingObject };
          });
          const requests = userSportsWithId.map(userSportWithId => {
            return users_sports.addUserSports(newUser["id"], userSportWithId["id"], userSportWithId["self_skill"]);
          });
          Promise.all(requests)
            .then(() => {
              res.status(201).send({ success: true, token: newUser["id"] });
            })
            .catch(error => {
              res.status(500).send(error);
            });
        });
    });
});

module.exports = router;