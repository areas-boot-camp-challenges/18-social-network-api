// Users.
const {
	validateUserId,
	validateUsernameAndEmail,
	validateUsernameOrEmail,
	validateFriendId,
} = require(`./userValidationMiddleware`)

// Thoughts.
const {
	validateThoughtId,
	validatethoughtTextAndUsername,
	validatethoughtTextOrUsername,
	validateReactionBodyAndUsername,
	validateReactionId,
} = require(`./thoughtValidationMiddleware`)

// Errors.
const handleErrors = require(`./errorMiddleware`)

module.exports = {
	validateUserId,
	validateUsernameAndEmail,
	validateUsernameOrEmail,
	validateFriendId,
	validateThoughtId,
	validatethoughtTextAndUsername,
	validatethoughtTextOrUsername,
	validateReactionBodyAndUsername,
	validateReactionId,
	handleErrors,
}
