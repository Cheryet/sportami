const db = require('../index.js');

const getAllUserSports = () => {
	return db.query("SELECT * FROM users_sports;").then(data => {
		return data.rows;
	})
}

module.exports = {getAllUserSports}