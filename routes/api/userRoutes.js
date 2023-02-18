// Dependencies.
const userRouter = require(`express`).Router()

// Middleware.
const {
	validateUserId,
	validateUsernameAndEmail,
	validateUsernameOrEmail,
	validateFriendId,
} = require(`../../middleware`)

// Controllers.
const {
	getUsers,
	getUser,
	addUser,
	updateUser,
	deleteUser,
	addFriend,
	deleteFriend,
} = require(`../../controllers/userController`)

// Error handler.
const { errorHandler } = require(`../../middleware`)

// User routes.
userRouter
	.get(`/`,
		getUsers,
		errorHandler,
	)
	.get(`/:userId`,
		validateUserId,
		getUser,
		errorHandler,
	)
	.post(`/`,
		validateUsernameAndEmail,
		addUser,
		errorHandler,
	)
	.put(`/:userId`,
		validateUserId,
		validateUsernameOrEmail,
		updateUser,
		errorHandler,
	)
	.delete(`/:userId`,
		validateUserId,
		deleteUser,
		errorHandler,
	)

// Friend routes.
userRouter
	.post(`/:userId/friends/:friendId`,
		validateUserId,
		validateFriendId,
		addFriend,
		errorHandler,
	)
	.delete(`/:userId/friends/:friendId`,
		validateUserId,
		validateFriendId,
		deleteFriend,
		errorHandler,
	)

module.exports = userRouter
