// Handle errors.
function handleErrors(err, req, res) {
	console.error(err)
	res.status(500).json(`Sorry, something went wrong.`)
}

module.exports = handleErrors
