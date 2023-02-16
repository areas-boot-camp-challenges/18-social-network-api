// Dependencies.
const mongoose = require(`mongoose`)

// Set up a connection to the database.
const db = `socialNetwork`
mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

module.exports = mongoose.connection
