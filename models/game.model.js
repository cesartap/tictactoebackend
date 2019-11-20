const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  nameP1: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  },
  nameP2: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    minlength: 3
  }, winner: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;