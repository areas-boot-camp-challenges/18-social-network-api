// Dependencies.
const apiRouter = require(`express`).Router()

// API routes.
const userRoutes = require(`./userRoutes`)
const thoughtRoutes = require(`./thoughtRoutes`)

// Set up the routes.
apiRouter.use(`/users`, userRoutes)
apiRouter.use(`/thoughts`, thoughtRoutes)

module.exports = apiRouter
