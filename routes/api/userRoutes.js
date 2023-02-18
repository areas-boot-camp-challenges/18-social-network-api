// Dependencies.
const userRouter = require(`express`).Router()

// Middleware.
const {
	validateUserId,
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
		addUser,
		errorHandler,
	)
	.put(`/:userId`,
		validateUserId,
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
