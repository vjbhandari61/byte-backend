const mongoose = require('mongoose');

const mysteryQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  domain: { type: String, required: true }
});

module.exports = mongoose.model('MysteryQuestion', mysteryQuestionSchema);
