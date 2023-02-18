// Dependencies.
const {
	validateUserId,
	validateFriendId,
} = require(`./userValidationMiddleware`)
const errorHandler = require(`./errorMiddleware`)

module.exports = {
	validateUserId,
	validateFriendId,
	errorHandler,
}
