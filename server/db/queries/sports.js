const db = require('../index.js');

const getAllSports = () => {
	return db.query("SELECT * FROM sports ORDER BY id;").then(data => {
		return data.rows;
	})
}

module.exports = {getAllSports}