// Dependencies.
const { Types } = require(`mongoose`)

// Models.
const { User, Thought } = require(`../models`)

// Validate thought ID (for getThought, updateThought, deleteThought, addReaction, deleteReaction).
async function validateThoughtId(req, res, next) {
	const thoughtId = req.params.thoughtId
	if (!thoughtId) {
		return res.status(400).send(`You must submit a thought ID.`)
	}
	if (!Types.ObjectId.isValid(thoughtId)) {
		return res.status(400).send(`You must submit a valid thought ID.`)
	}
	const thought = await Thought.findOne({
		_id: thoughtId,
	})
	if (!thought) {
		return res.status(404).send(`Thought not found.`)
	}
	next()	
}

// Validate thoughtText and username (for addThought).
async function validatethoughtTextAndUsername(req, res, next) {
	const {
		thoughtText,
		username } = req.body
	if (!thoughtText || !username) {
		return res.status(400).send(`You must submit a thought and username.`)
	}
	const usernameExists = await User.findOne({
		username: username,
	})
	if (!usernameExists) {
		return res.status(400).send(`User not found. You must submit a username that exists.`)
	}
	next()
}

// Validate thoughtText or username (for updateThought).
async function validatethoughtTextOrUsername(req, res, next) {
	const { thoughtText } = req.body
	if (!thoughtText) {
		return res.status(400).send(`You must submit a thought.`)
	}
	next()
}

module.exports = {
	validateThoughtId,
	validatethoughtTextAndUsername,
	validatethoughtTextOrUsername,
}
