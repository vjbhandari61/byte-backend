const express = require('express');
const { getQuestions, getRandomQuestionByDomain } = require('../controllers/questionController');

const router = express.Router();

router.get('/', getQuestions);
router.get('/mystery', getRandomQuestionByDomain);

module.exports = router;
