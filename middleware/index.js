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
	validateReactionId,
	handleErrors,
}
