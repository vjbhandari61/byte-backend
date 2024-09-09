const Question = require('../models/Question');
const MysteryQuestion = require('../models/MysteryQuestion');


exports.getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find({}, 'question choices');

    const formattedQuestions = questions.map(q => ({
      question: q.question,
      choices: q.choices
    }));

    res.json(formattedQuestions);
  } catch (err) {
    next(err);
  }
};

exports.getRandomQuestionByDomain = async (req, res) => {
  const { domain } = req.query;

  try {
    const questions = await MysteryQuestion.find({ domain });

    if (questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for the given domain' });
    }

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    res.json({ question: randomQuestion.question, domain: randomQuestion.domain });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
