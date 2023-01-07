const db = require('../index.js');

const getAllUserSports = () => {
	return db.query("SELECT * FROM users_sports;").then(data => {
		return data.rows;
	})
}

const getUserSportsById = (id) => {
  return db.query("SELECT * FROM users_sports WHERE id = $1", [id]).then((data) => {
    return data.rows;
  });
};

const addUserSports = (user_id, sport_id, self_skill) => {
	return db.query(`
		INSERT INTO user_sports (user_id, sport_id, self_skill) VALUES ($1, $2, $3, $4, $5)`, 
    [user_id, sport_id, self_skill]).then(
		data => {
			return data.rows;
	})
}

module.exports = {getAllUserSports, getUserSportsById, addUserSports}