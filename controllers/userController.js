// Models.


module.exports = {
	// GET /api/users.
	getUsers (req, res) {
		res.send(`getUsers`)
	},
	// GET /api/users/:userId.
	getUser (req, res) {
		res.send(`getUser`)
	},
	// POST /api/users.
	addUser (req, res) {
		res.send(`addUser`)
	},
	// PUT /api/users/:userId.
	updateUser (req, res) {
		res.send(`updateUser`)
	},
	// DELETE /api/users/:userId.
	deleteUser (req, res) {
		res.send(`deleteUser`)
	},
	// GET /api/users/:userId/friends/:friendId.
	addFriend (req, res) {
		res.send(`addFriend`)
	},
	// DELETE /api/users/:userId/friends/:friendId.
	deleteFriend (req, res) {
		res.send(`deleteFriend`)
	},
}
