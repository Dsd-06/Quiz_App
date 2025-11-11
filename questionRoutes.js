const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/question', authMiddleware, questionController.addQuestion);
router.delete('/question/:id', authMiddleware, questionController.deleteQuestion);

module.exports = router;
