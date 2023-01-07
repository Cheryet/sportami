const db = require('../index.js');

const getAllUsers = () => {
	return db.query("SELECT * FROM users;").then(data => {
		return data.rows;
	})
}

const getUserById = (id) => {
  return db.query("SELECT * FROM users WHERE id = $1", [id]).then((data) => {
    return data.rows;
  });
};

const addUser = (username, password, email, bio, location, gender, age, profile_pic) => {
  return db.query(
    "INSERT INTO users (username, password, email, bio, location, gender, age, profile_pic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
    [username, password, email, bio, location, gender, age, profile_pic]
  );
};

module.exports = {getAllUsers, getUserById, addUser}