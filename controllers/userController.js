// Models.
const { User } = require(`../models`)

// GET /api/users (getUsers).
async function getUsers(req, res, next) {
	try {
		const users = await User.find({})
		res.status(200).json(users)
	} catch (err) {
		next(err)
	}
}

// GET /api/users/:userId (getUser).
async function getUser(req, res, next) {
	try {
		const userId = req.params.userId
		const user = await User.findOne({ _id: userId })
		if (!user) {
			return res.status(404).send(`User not found.`)
		}
		res.status(200).json(user)
	} catch (err) {
		next(err)
	}
}

// POST /api/users (addUser).
async function addUser(req, res, next) {
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
		next(err)
	}
}

// PUT /api/users/:userId (updateUser).
async function updateUser(req, res, next) {
	try {
		const { username, email } = req.body
		if (!username && !email) {
			return res.status(400).send(`You must submit a username or email.`)
		}
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
		next(err)
	}
}

// DELETE /api/users/:userId (deleteUser).
async function deleteUser(req, res, next) {
	try {
		const userId = req.params.userId
		const user = await User.findOneAndRemove({
			_id: userId,
		})
		if (!user) {
			return res.status(404).send(`User not found.`)
		}
		res.status(204).send()
	} catch (err) {
		next(err)
	}
}

// POST /api/users/:userId/friends/:friendId (addFriend).
async function addFriend(req, res, next) {
	try {
		res.send(`addFriend`)
	} catch (err) {
		next(err)
	}
}

// DELETE /api/users/:userId/friends/:friendId (deleteFriend).
async function deleteFriend(req, res, next) {
	try {
		res.send(`deleteFriend`)
	} catch (err) {
		next(err)
	}
}

module.exports = {
	getUsers,
	getUser,
	addUser,
	updateUser,
	deleteUser,
	addFriend,
	deleteFriend,
}
