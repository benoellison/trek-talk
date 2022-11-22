const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
    name: {type: String, required: true},
    episodes: [{
        type: [Schema.Types.ObjectId],
        ref: 'Episode',
    }],
},
)

module.exports = mongoose.model('Series', seriesSchema)