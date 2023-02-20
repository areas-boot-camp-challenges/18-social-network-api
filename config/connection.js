// Dependencies.
const mongoose = require(`mongoose`)

// If there’s a bad query, throw an error.
mongoose.set(`strictQuery`, true)

// Set up a connection to the database.
const db = `socialNetwork`
mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

module.exports = mongoose.connection
