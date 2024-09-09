const express = require('express');
const { checkAnswers } = require('../controllers/answerController');

const router = express.Router();

router.post('/', checkAnswers);

module.exports = router;
