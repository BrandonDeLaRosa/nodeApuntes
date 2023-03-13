const PostServices = require('../services/post.services');

const getAllPosts = async (req, res,next) => {
    try {
        const posts = await PostServices.getAll();
        res.json(posts)
    } catch (error) {
        next(error)
    }
}

const getPostsWithAnswers = async (req,res,next) => {
    try {
        const {postId} = req.params;
        const postWithAnswers = await PostServices.postWithAnswers(postId);
        res.json(postWithAnswers)
    } catch (error) {
        next(error)
    }
}

const createPost = async (req,res,next) =>{
    try {
        const newPost = req.body;
        const post = await PostServices.create(newPost);
        res.status(201).json(post)
    } catch (error) {
        next(error)
    }
}

const updatePost = async (req,res,next) => {
    try {
        const {id} = req.params;
        const postInfo = req.body;
        await PostServices.postUpdate(id,postInfo)
        res.status(204).json('No-Content')
    } catch (error) {
        next(error)
    }
}

const deletePost = async (req,res,next) => {
    try {
        const {id} = req.params;
        await PostServices.deletedPost(id);
        res.status(201).send('deleted')
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createPost,
    getPostsWithAnswers,
    getAllPosts,
    updatePost,
    deletePost
}