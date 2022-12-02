const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
    title: {type: String, required: true},
    seasons: {type: Number, required: true},
    episodes: [{
        type: [Schema.Types.ObjectId],
        ref: 'Episode',
    }],
    
},
)

module.exports = mongoose.model('Series', seriesSchema)