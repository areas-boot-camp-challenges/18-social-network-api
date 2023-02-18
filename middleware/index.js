// Dependencies.
const {
	validateUserId,
	validateUsernameAndEmail,
	validateUsernameOrEmail,
	validateFriendId,
} = require(`./userValidationMiddleware`)
const errorHandler = require(`./errorMiddleware`)

module.exports = {
	validateUserId,
	validateUsernameAndEmail,
	validateUsernameOrEmail,
	validateFriendId,
	errorHandler,
}
