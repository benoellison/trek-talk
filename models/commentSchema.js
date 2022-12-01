const Schema = require('mongoose').Schema;

const commentSchema = new Schema({
    content: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true}
)

module.exports = commentSchema;
