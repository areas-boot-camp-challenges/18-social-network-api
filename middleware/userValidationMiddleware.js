// Dependencies.
const { Types } = require(`mongoose`)

// Models.
const { User } = require(`../models`)

// Validate user ID.
async function validateUserId(err, req, res, next) {
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

// Validate username and email
async function validateUsernameAndEmail(err, req, res, next) {
	const {
		username,
		email } = req.body
	if (!username || !email) {
		return res.status(400).send(`You must submit a username and email.`)
	}
	next()
}

// Validate username or email
async function validateUsernameOrEmail(err, req, res, next) {
	const {
		username,
		email } = req.body
	if (!username && !email) {
		return res.status(400).send(`You must submit a username or email.`)
	}
	next()
}

// Validate friend ID.
async function validateFriendId(err, req, res, next) {
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
