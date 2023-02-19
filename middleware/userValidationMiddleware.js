// Dependencies.
const { Types } = require(`mongoose`)

// Models.
const { User } = require(`../models`)

// Validate user ID (for getUser, updateUser, deleteUser, addFriend, deleteFriend).
async function validateUserId(req, res, next) {
	const userId = req.params.userId
	if (!userId) {
		return res.status(400).send(`You must submit a user ID.`)
	}
	if (!Types.ObjectId.isValid(userId)) {
		return res.status(400).send(`You must submit a valid user ID.`)
	}
	const user = await User.findOne({
		_id: userId,
	})
	if (!user) {
		return res.status(404).send(`User not found.`)
	}
	next()	
}

// Validate username and email (for addUser).
async function validateUsernameAndEmail(req, res, next) {
	const {
		username,
		email } = req.body
	if (!username || !email) {
		return res.status(400).send(`You must submit a username and email.`)
	}
	const usernameExists = await User.findOne({
		username: username,
	})
	if (usernameExists) {
		return res.status(400).send(`Username already exists. You must submit a unique username.`)
	}
	const emailExists = await User.findOne({
		email,
	})
	if (emailExists) {
		return res.status(400).send(`Email already exists. You must submit a unique email.`)
	}
	next()
}

// Validate username or email (for updateUser).
async function validateUsernameOrEmail(req, res, next) {
	const {
		username,
		email } = req.body
	if (!username && !email) {
		return res.status(400).send(`You must submit a username or email.`)
	}
	if (username) {
		const usernameExists = await User.findOne({
			username: username,
		})
		if (usernameExists) {
			return res.status(400).send(`Username already exists. You must submit a unique username.`)
		}	
	}
	if (email) {
		const emailExists = await User.findOne({
			email: email,
		})
		if (emailExists) {
			return res.status(400).send(`Email already exists. You must submit a unique email.`)
		}	
	}
	next()
}

// Validate friend ID (for addFriend and deleteFriend).
async function validateFriendId(req, res, next) {
	const friendId = req.params.friendId
	if (!friendId) {
		return res.status(400).send(`You must submit a friend ID.`)
	}
	if (!Types.ObjectId.isValid(friendId)) {
		return res.status(400).send(`You must submit a valid friend ID.`)
	}
	const friend = await User.findOne({
		_id: friendId,
	})
	if (!friend) {
		return res.status(404).send(`User not found.`)
	}
	next()	
}

module.exports = {
	validateUserId,
	validateUsernameAndEmail,
	validateUsernameOrEmail,
	validateFriendId,
}
