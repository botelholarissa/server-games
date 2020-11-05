const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    platforms: {
        type: String,
        required: false
    },
    slug:{
        type: String,
        required: true
    },
    first_release_date:{
        type: Number,
        required: false
    },
    summary:{
        type: String,
        required: false
    },
    company:{
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: false
    }
},
{
    collection: 'games',
    versionKey: false
}
);

const gamesCollection = mongoose.model('games', gamesSchema);

module.exports = {gamesCollection}