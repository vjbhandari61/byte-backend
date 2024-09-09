const Team = require('../models/Team');

exports.registerTeam = async (req, res) => {
    const { teamName } = req.body;

    try {
        const team = await Team.create({teamName})

        res.json({ message: 'Team Registered', teamId: team._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
