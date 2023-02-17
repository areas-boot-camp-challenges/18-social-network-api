// Dependencies.
const thoughtRouter = require(`express`).Router()

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
	.get(`/`, getThoughts)
	.get(`/:thoughtId`, getThought)
	.post(`/`, addThought)
	.put(`/:thoughtId`, updateThought)
	.delete(`/:thoughtId`, deleteThought)

// Reaction routes.
thoughtRouter
	.post(`/:thoughtId/reactions/:reactionId`, addReaction)
	.delete(`/:thoughtId/reactions/:reactionId`, deleteReaction)

module.exports = thoughtRouter
