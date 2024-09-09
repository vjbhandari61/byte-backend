const express = require('express');
const { loginAdmin, viewResult } = require('../controllers/adminController');

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/view-result', viewResult);

module.exports = router;
