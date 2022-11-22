const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
    name: {type: String, required: true},
    comments: [{
        type: [Schema.Types.ObjectId],
        ref: 'Comment',
    }],
},
)

module.exports = mongoose.model('Episode', episodeSchema)