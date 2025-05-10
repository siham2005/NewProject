const express = require('express');
const examCtrl = require('../controllers/examController');
const { authenticate } = require('./authRoutes');
const router = express.Router();

router.post('/',      authenticate, examCtrl.createExam);
router.get('/latest', authenticate, examCtrl.getLatest);
router.get('/:link',  authenticate, examCtrl.getByLink);

module.exports = router;