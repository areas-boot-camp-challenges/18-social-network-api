// Models.
const { User } = require(`../models`)

module.exports = {
	// GET /api/users.
	getUsers (req, res) {
		res.send(`getUsers`)
	},
	// GET /api/users/:userId.
	async getUser (req, res) {
		try {
			const user = await User.findOne({ _id: req.params.userId})
			res.send(user)
		} catch (err) {
			res.status(500).json(err)
		}
	},

	// POST /api/users.
	async addUser (req, res) {
		try {
			const user = await User.create(req.body)
			res.status(201).json(user)
		} catch (err) {
			res.status(500).json(err)
		}
	},

	// PUT /api/users/:userId.
	updateUser (req, res) {
		res.send(`updateUser`)
	},
	// DELETE /api/users/:userId.
	deleteUser (req, res) {
		res.send(`deleteUser`)
	},
	// POST /api/users/:userId/friends/:friendId.
	addFriend (req, res) {
		res.send(`addFriend`)
	},
	// DELETE /api/users/:userId/friends/:friendId.
	deleteFriend (req, res) {
		res.send(`deleteFriend`)
	},
}
