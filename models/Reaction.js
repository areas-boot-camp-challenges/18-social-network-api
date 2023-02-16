// Dependencies.
const { Schema, model } = require(`mongoose`)

// Schema.
const reactionSchema = new Schema(
	{
		reactionId: {
			// to-do
		},
		reactionBody: {
			type: String,
			required: true,
			maxlength: 280,
		},
		username: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			getters: true,
			virtuals: true,
		},
	},
)

// Format createdAt.
reactionSchema
	.virtual(`formatCreatedAt`)
	.get(function () {
		return Date(this.createdAt).toLocaleString()
	})

// Model.
const Reaction = model(`Reaction`, reactionSchema)

module.exports = Reaction
