// Dependencies.
const { Types } = require(`mongoose`)

// Validate user ID.
function validateUserId(err, req, res, next) {
	const userId = req.params.userId
	if (!userId) {
		return res.status(400).send(`You must submit a user ID.`)
	}
	if (!Types.ObjectId.isValid(userId)) {
		return res.status(400).send(`You must submit a valid user ID.`)
	}
	next()	
}

module.exports = {
	validateUserId,
}
