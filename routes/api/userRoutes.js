// Dependencies.
const userRouter = require(`express`).Router()

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
	.get(`/`, getUsers)
	.get(`/:userId`, getUser)
	.post(`/`, addUser)
	.put(`/:userId`, updateUser)
	.delete(`/:userId`, deleteUser)

// Friend routes.
userRouter
	.post(`/:userId/friends/:friendId`, addFriend)
	.delete(`/:userId/friends/:friendId`, deleteFriend)

module.exports = userRouter
