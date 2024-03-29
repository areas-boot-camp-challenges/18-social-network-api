// Dependencies.
const { Schema, Types } = require(`mongoose`)

// Schema.
const reactionSchema = new Schema(
	{
		reactionId: {
			type: Types.ObjectId,
			default: () => new Types.ObjectId(),
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
		id: false,
	},
)

// Format createdAt.
reactionSchema
	.virtual(`createdAtFormatted`)
	.get(function () {
		return Date(this.createdAt).toLocaleString()
	})

module.exports = reactionSchema
