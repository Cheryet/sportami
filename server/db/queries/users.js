const db = require('../index.js');

const getAllUsers = () => {
	return db.query("SELECT * FROM users;").then(data => {
		return data.rows;
	})
}

module.exports = {getAllUsers}