// Dependencies.
const userRouter = require(`express`).Router()
const {
	validateUserId,
} = require(`../../middleware`)
const {
	getUsers,
	getUser,
	addUser,
	updateUser,
	deleteUser,
	addFriend,
	deleteFriend,
} = require(`../../controllers/userController`)
const { errorHandler } = require(`../../middleware`)

// User routes.
userRouter
	.get(`/`, getUsers, errorHandler)
	.get(`/:userId`, validateUserId, getUser, errorHandler)
	.post(`/`, addUser, errorHandler)
	.put(`/:userId`, updateUser, errorHandler)
	.delete(`/:userId`, validateUserId, deleteUser, errorHandler)

// Friend routes.
userRouter
	.post(`/:userId/friends/:friendId`, addFriend, errorHandler)
	.delete(`/:userId/friends/:friendId`, deleteFriend, errorHandler)

module.exports = userRouter
