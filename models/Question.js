const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  choices: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true }
});

module.exports = mongoose.model('Question', questionSchema);
