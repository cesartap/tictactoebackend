const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const conditionSchema = new Schema({
  move: {
    type: String,
    required: true
  },
  kills: {
    type: String,
    required: true
  }
});

const Conditions = mongoose.model('Conditions', conditionSchema);

module.exports = Conditions;