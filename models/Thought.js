// Dependencies.
const { Schema, model } = require(`mongoose`)
const reactionSchema = require(`./Reaction`)

// Schema.
const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minlength: 1,
			maxlength: 280,
		},
		username: {
			type: String,
			required: true,
		},
		reactions: [
			reactionSchema,
		],
	},
	{
		timestamps: true,
		toJSON: {
			getters: true,
			virtuals: true,
		},
		id: false,
	},
)

// Format createdAt.
thoughtSchema
	.virtual(`createdAtFormatted`)
	.get(function () {
		return new Intl.DateTimeFormat(`en-US`, {
			dateStyle: `medium`,
			timeStyle: `short`,
		})
			.format(this.createdAt)
	})

// Get a thought’s reaction count.
thoughtSchema
	.virtual(`reactionCount`)
	.get(function () {
		return this.reactions.length
	})

// Model.
const Thought = model(`Thought`, thoughtSchema)

module.exports = Thought
