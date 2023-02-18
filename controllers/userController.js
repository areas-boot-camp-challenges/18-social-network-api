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
		const user = await User.findOne({
			_id: req.params.userId,
		})
		res.status(200).json(user)
	} catch (err) {
		next(err)
	}
}

// POST /api/users (addUser).
async function addUser(req, res, next) {
	try {
		const user = await User.create(
			req.body,
		)
		res.status(201).json(user)
	} catch (err) {
		next(err)
	}
}

// PUT /api/users/:userId (updateUser).
async function updateUser(req, res, next) {
	try {
		const user = await User.findOneAndUpdate(
			{ _id: req.params.userId },
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
		const user = await User.findOneAndRemove({
			_id: req.params.userId,
		})
		res.status(204).send(user)
	} catch (err) {
		next(err)
	}
}

// POST /api/users/:userId/friends/:friendId (addFriend).
async function addFriend(req, res, next) {
	try {
		const user = await User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $addToSet: { friends: req.params.friendId } },
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
		const user = await User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $pull: { friends: req.params.friendId } },
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
