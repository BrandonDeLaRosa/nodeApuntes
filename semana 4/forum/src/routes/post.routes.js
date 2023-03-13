const { Router } = require('express');
const {createPost, getPostsWithAnswers, getAllPosts, updatePost, deletePost} = require('../controllers/posts.controller')

const router= Router();

router.get('/api/v1/posts', getAllPosts);
//? Obtencion de un post por su id con todas sus respuestas
router.get('/api/v1/posts/:postId/answers', getPostsWithAnswers);
router.post('/api/v1/posts', createPost);
router.put('/api/v1/posts/:id', updatePost);
router.delete('/api/v1/posts/:id', deletePost);

module.exports= router;