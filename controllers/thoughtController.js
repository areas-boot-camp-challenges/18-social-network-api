// Models.


module.exports = {
	// GET /api/thoughts.
	getThoughts (req, res) {
		res.send(`getThoughts`)
	},
	// GET /api/thoughts/:thoughtId.
	getThought (req, res) {
		res.send(`getThought`)
	},
	// POST /api/thoughts.
	addThought (req, res) {
		res.send(`addThought`)
	},
	// PUT /api/thoughts/:thoughtId.
	updateThought (req, res) {
		res.send(`updateThought`)
	},
	// DELETE /api/thoughts/:thoughtId.
	deleteThought (req, res) {
		res.send(`deleteThought`)
	},
	// GET /api/thoughts/:thoughtId/reactions/:reactionId.
	addReaction (req, res) {
		res.send(`addReaction`)
	},
	// DELETE /api/thoughts/:thoughtId/reactions/:reactionId.
	deleteReaction (req, res) {
		res.send(`deleteReaction`)
	},
}
