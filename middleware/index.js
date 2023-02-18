// Dependencies.
const { validateUserId } = require(`./userValidationMiddleware`)
const errorHandler = require(`./errorMiddleware`)

module.exports = {
	validateUserId,
	errorHandler,
}
