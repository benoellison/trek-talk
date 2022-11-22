const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {type: String, required: true},
    comments: [{
        type: [Schema.Types.ObjectId],
        ref: 'Comment',
    }],
},
)

module.exports = mongoose.model('Movie', movieSchema)