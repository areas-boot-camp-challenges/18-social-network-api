// Dependencies.
const express = require(`express`)

// App.
const app = express()
const PORT = process.env.PORT || 3030

// Models.
const db = require(`./config/connection`)

// Routes.
const routes = require(`./routes`)

// Middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set up the routes.
app.use(routes)

// Start the server.
db.once(`open`, () => {
	app.listen(PORT, () => {
		console.log(`API server’s listening at http://localhost:${PORT}! 🚀`)
	})
})
