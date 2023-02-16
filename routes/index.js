// Dependencies.
const mainRouter = require(`express`).Router()

// API routes.
const apiRoutes = require(`./api`)

// Set up the routes.
mainRouter.use(`/api`, apiRoutes)

module.exports = mainRouter
