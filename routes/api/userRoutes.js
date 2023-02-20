// Dependencies.
const userRouter = require(`express`).Router()

// Middleware.
const {
	validateUserId,
	validateUsernameAndEmail,
	validateUsernameOrEmail,
	validateFriendId,
	handleErrors,
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

// User routes.
userRouter
	.get(`/`,
		getUsers,
		handleErrors,
	)
	.get(`/:userId`,
		validateUserId,
		getUser,
		handleErrors,
	)
	.post(`/`,
		validateUsernameAndEmail,
		addUser,
		handleErrors,
	)
	.put(`/:userId`,
		validateUserId,
		validateUsernameOrEmail,
		updateUser,
		handleErrors,
	)
	.delete(`/:userId`,
		validateUserId,
		deleteUser,
		handleErrors,
	)

// Friend routes.
userRouter
	.post(`/:userId/friends/:friendId`,
		validateUserId,
		validateFriendId,
		addFriend,
		handleErrors,
	)
	.delete(`/:userId/friends/:friendId`,
		validateUserId,
		validateFriendId,
		deleteFriend,
		handleErrors,
	)

module.exports = userRouter
