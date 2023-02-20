// Models.
const { User, Thought } = require(`../models`)

// GET /api/thoughts (getThoughts).
async function getThoughts(req, res, next) {
	try {
		const thoughts = await Thought.find({})
		res.status(200).json(thoughts)
	} catch (err) {
		next(err)
	}
}

// GET /api/thoughts/:thoughtId (getThought).
async function getThought(req, res, next) {
	try {
		const thought = await Thought.findOne({
			"_id": req.params.thoughtId,
		})
		res.status(200).json(thought)
	} catch (err) {
		next(err)
	}
}

// POST /api/thoughts (addThought).
async function addThought(req, res, next) {
	try {
		const thought = await Thought.create(
			req.body,
		)
		// Add the thought to the user's thoughts.
		await User.findOneAndUpdate(
			{ "username": req.body.username },
			{ $addToSet: { thoughts: thought._id } },
			{ new: true },
		)
		res.status(201).json(thought)
	} catch (err) {
		next(err)
	}
}

// PUT /api/thoughts/:thoughtId (updateThought).
async function updateThought(req, res, next) {
	try {
		const thought = await Thought.findOneAndUpdate(
			{ "_id": req.params.thoughtId },
			{ $set: { thoughtText: req.body.thoughtText } },
			{ new: true },
		)
		res.status(200).json(thought)
	} catch (err) {
		next(err)
	}
}

// DELETE /api/thoughts/:thoughtId deleteThought).
async function deleteThought(req, res, next) {
	try {
		const thought = await Thought.findOneAndRemove({
			"_id": req.params.thoughtId,
		})
		// Remove the thought from the user's thoughts.
		await User.findOneAndUpdate(
			{ "username": thought.username },
			{ $pull: { thoughts: thought._id } },
			{ new: true },
		)
		res.status(204).send(thought)
	} catch (err) {
		next(err)
	}
}

// POST /api/thoughts/:thoughtId/reactions (addReaction).
async function addReaction(req, res, next) {
	try {
		// To-do: Validate reactionBody and username.
		const thought = await Thought.findOneAndUpdate(
			{ "_id": req.params.thoughtId },
			{ $addToSet: { reactions: req.body } },
			{ new: true },
		)
		res.status(200).json(thought)
	} catch (err) {
		next(err)
	}
}

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId (deleteReaction).
async function deleteReaction(req, res, next) {
	try {
		// To-do: Validate reactionId.
		const thought = await Thought.findOneAndUpdate(
			{ "_id": req.params.thoughtId },
			{ $pull: { reactions: { reactionId: req.params.reactionId } } },
			{ new: true },
		)
		res.status(200).json(thought)
	} catch (err) {
		next(err)
	}
}

module.exports = {
	getThoughts,
	getThought,
	addThought,
	updateThought,
	deleteThought,
	addReaction,
	deleteReaction,
}