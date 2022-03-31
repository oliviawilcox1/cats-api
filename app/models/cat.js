const mongoose = require('mongoose')

const catSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		adoptable: {
			type: Boolean,
		},
		// owner: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: 'User',
		// 	required: true,
		// },
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Cat', catSchema)
