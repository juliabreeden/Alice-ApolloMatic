const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    position: String,
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;