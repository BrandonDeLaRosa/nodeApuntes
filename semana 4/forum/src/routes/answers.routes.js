const  { Router } = require('express');
const { createAnswer,getAllAnswers,deleteAnswer,updateAnswer } = require('../controllers/answers.controller')

const router = Router();

router.get('/api/v1/answers', getAllAnswers);
router.post('/api/v1/answers', createAnswer);
router.delete('/api/v1/answers/:id', deleteAnswer);
router.put('/api/v1/answers/:id', updateAnswer);

module.exports = router; 