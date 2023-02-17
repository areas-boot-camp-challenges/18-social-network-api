// Dependencies.
const { Schema, model } = require(`mongoose`)

// Schema.
const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,}$/],
		},
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: `Thought`,
			},
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: `User`,
			},
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
userSchema
	.virtual(`formatCreatedAt`)
	.get(function () {
		return new Intl.DateTimeFormat(`en-US`, {
			dateStyle: `medium`,
			timeStyle: `short`,
		})
			.format(this.createdAt)
	})

// Get a user’s friend count.
userSchema
	.virtual(`friendCount`)
	.get(function () {
		return this.friends.length
	})

// Model.
const User = model(`User`, userSchema)

module.exports = User
