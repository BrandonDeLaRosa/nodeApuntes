const { Router } = require('express');
const {createPost, getPostsWithAnswers} = require('../controllers/posts.controller')

const router= Router();

router.get('api/v1/posts/:postId/answers', getPostsWithAnswers);
router.post('/api/v1/posts', createPost);
//? Obtencion de un post por su id con todas sus respuestas

module.exports= router;