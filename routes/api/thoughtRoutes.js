// Dependencies.
const thoughtRouter = require(`express`).Router()

// Middleware.
const {
	validateThoughtId,
	validatethoughtTextAndUsername,
	validatethoughtTextOrUsername,
	validateReactionId,
	handleErrors,
} = require(`../../middleware`)

// Controllers.
const {
	getThoughts,
	getThought,
	addThought,
	updateThought,
	deleteThought,
	addReaction,
	deleteReaction,
} = require(`../../controllers/thoughtController`)

// Thought routes.
thoughtRouter
	.get(`/`,
		getThoughts,
		handleErrors,
	)
	.get(`/:thoughtId`,
		validateThoughtId,
		getThought,
		handleErrors,
	)
	.post(`/`,
		validatethoughtTextAndUsername,
		addThought,
		handleErrors,
	)
	.put(`/:thoughtId`,
		validateThoughtId,
		validatethoughtTextOrUsername,
		updateThought,
		handleErrors,
	)
	.delete(`/:thoughtId`,
		validateThoughtId,
		deleteThought,
		handleErrors,
	)

// Reaction routes.
thoughtRouter
	.post(`/:thoughtId/reactions/:reactionId`,
		validateThoughtId,
		validateReactionId,
		addReaction,
		handleErrors,
	)
	.delete(`/:thoughtId/reactions/:reactionId`,
		validateThoughtId,
		validateReactionId,
		deleteReaction,
		handleErrors,
	)

module.exports = thoughtRouter
