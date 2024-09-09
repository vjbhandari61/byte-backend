const Team = require('../models/Team');

exports.compileCodeRound2 = async (req, res) => {
    const { teamId, confirmation } = req.body;

    try {
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        } 

        if (confirmation === true) {
            team.score += 1;
            await team.save();
            return res.json({ message: 'Score incremented', score: team.score });
        } else {
            return res.json({ message: 'No changes made to the score', score: team.score });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
