const Question = require('../models/Question');
const Team = require('../models/Team');

exports.checkAnswers = async (req, res, next) => {
    const { teamName, answers } = req.body;

    try {
        const team = await Team.findOne(teamName);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }

        let score = 0;

        for (const answerObj of answers) {
            const questionText = Object.keys(answerObj)[0];
            const selectedAnswer = answerObj[questionText];

            const question = await Question.findOne({ question: questionText });

            if (question && question.correctAnswer === selectedAnswer) {
                score += 1;
            }
        }

        team.score += score;
        await team.save();

        res.json({ message: 'Score updated', score: team.score });
    } catch (err) {
        next(err);
    }
};
