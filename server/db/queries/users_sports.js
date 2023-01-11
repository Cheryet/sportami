const db = require("../index.js");

const getAllUserSports = () => {
  return db.query("SELECT * FROM users_sports;").then((data) => {
    return data.rows;
  });
};

const getUserSportsById = (id) => {
  return db
    .query("SELECT * FROM users_sports WHERE user_id = $1", [id])
    .then((data) => {
      return data.rows;
    });
};

const addUserSports = (user_id, sport_id, self_skill) => {
  return db
    .query(
      `
		INSERT INTO users_sports (user_id, sport_id, self_skill) VALUES ($1, $2, $3)`,
      [user_id, sport_id, self_skill]
    )
    .then((data) => {
      return data.rows;
    });
};

module.exports = { getAllUserSports, getUserSportsById, addUserSports };
