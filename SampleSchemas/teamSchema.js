const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: String,
    numberOfPlayers: Number,
    teamCaptain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    },
    championshipsWon: Number
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;