const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    name:String,
    imageUrl:String
})

const Cards = mongoose.model('cards', cardSchema);

module.exports = Cards; 