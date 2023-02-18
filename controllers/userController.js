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
		res.status(200).json(user)
	} catch (err) {
		next(err)
	}
}

// POST /api/users (addUser).
async function addUser(req, res, next) {
	try {
		const {
			username,
			email } = req.body
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
		const userId = req.params.userId
		const {
			username,
			email } = req.body
		if (!username && !email) {
			return res.status(400).send(`You must submit a username or email.`)
		}
		const user = await User.findOneAndUpdate(
			{ _id: userId },
			{ $set: req.body },
			{ runValidators: true,
				new: true,
			},
		)
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
		res.status(204).send(user)
	} catch (err) {
		next(err)
	}
}

// POST /api/users/:userId/friends/:friendId (addFriend).
async function addFriend(req, res, next) {
	try {
		const userId = req.params.userId
		const friendId = req.params.friendId
		const user = await User.findOneAndUpdate(
			{ _id: userId },
			{ $addToSet: { friends: friendId } },
			{ new: true },
		)
		res.status(200).json(user)
	} catch (err) {
		next(err)
	}
}

// DELETE /api/users/:userId/friends/:friendId (deleteFriend).
async function deleteFriend(req, res, next) {
	try {
		const userId = req.params.userId
		const friendId = req.params.friendId
		const user = await User.findOneAndUpdate(
			{ _id: userId },
			{ $pull: { friends: friendId } },
			{ new: true },
		)
		res.status(200).json(user)
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
