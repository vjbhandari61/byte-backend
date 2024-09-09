const Admin = require('../models/Admin');
const Team = require('../models/Team');

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    if (admin.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', isAdmin: true });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.viewResult = async (req, res) => {
  try {
    const results = await Team.find();
    res.json({ message: 'Success', results  });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};