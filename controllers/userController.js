// Dependencies.
const { Types } = require(`mongoose`)

// Models.
const { User } = require(`../models`)

module.exports = {

	// GET /api/users (getUsers).
	async getUsers (req, res) {
		try {
			const users = await User.find({})
			res.status(200).json(users)
		} catch (err) {
			res.status(500).json(err)
		}
	},

	// GET /api/users/:userId (getUser).
	async getUser (req, res) {
		try {
			const userId = req.params.userId
			if (!userId) {
				return res.status(400).send(`You must submit a user ID.`)
			}
			if (!Types.ObjectId.isValid(userId)) {
				return res.status(400).send(`You must submit a valid user ID.`)
			}
			const user = await User.findOne({ _id: userId })
			if (!user) {
				return res.status(404).send(`User not found.`)
			}
			res.status(200).json(user)
		} catch (err) {
			res.status(500).json(err)
		}
	},

	// POST /api/users (addUser).
	async addUser (req, res) {
		try {
			const { username, email } = req.body
			if (!username || !email) {
				return res.status(400).send(`You must submit a username and email.`)
			}
			const user = await User.create({
				username,
				email,
			})
			res.status(201).json(user)
		} catch (err) {
			res.status(500).json(err)
		}
	},

	// PUT /api/users/:userId (updateUser).
	async updateUser (req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.params.userId },
				{ $set: req.body },
				{ runValidators: true,
					new: true,
				},
			)
			if (!user) {
				return res.status(404).send(`User not found.`)
			}
			res.status(200).json(user)
		} catch (err) {
			res.status(500).json(err)
		}
	},

	// DELETE /api/users/:userId (deleteUser).
	async deleteUser (req, res) {
		try {
			const userId = req.params.userId
			if (!userId) {
				return res.status(400).send(`You must submit a user ID.`)
			}
			if (!Types.ObjectId.isValid(userId)) {
				return res.status(400).send(`You must submit a valid user ID.`)
			}
			const user = await User.findOneAndRemove({
				_id: userId,
			})
			if (!user) {
				return res.status(404).send(`User not found.`)
			}
			res.status(204).send(`User deleted.`)
		} catch (err) {
			res.status(500).json(err)
		}
	},

	// POST /api/users/:userId/friends/:friendId (addFriend).
	async addFriend (req, res) {
		try {
			res.send(`addFriend`)
		} catch (err) {
			res.status(500).json(err)
		}
	},

	// DELETE /api/users/:userId/friends/:friendId (deleteFriend).
	async deleteFriend (req, res) {
		try {
			res.send(`deleteFriend`)
		} catch (err) {
			res.status(500).json(err)
		}
	},

}
