const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./commentSchema')

const movieSchema = new Schema({
    title: {type: String, required: true},
    comments: [commentSchema],
},
)

module.exports = mongoose.model('Movie', movieSchema)