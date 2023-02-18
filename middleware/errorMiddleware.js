// Handle errors.
function errorHandler(err, req, res, next) {
	console.error(err)
	res.status(500).json(`Sorry, something went wrong.`)
	next(err)	
}

module.exports = errorHandler
