const express = require('express');
const { compileCodeRound2 } = require('../controllers/compilerController');

const router = express.Router();

router.post('/compile', compileCodeRound2);

module.exports = router;
