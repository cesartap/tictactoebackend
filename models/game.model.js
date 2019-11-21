const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({_id:{type: String},
  nameP1: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 1
  },
  gamesWon: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;