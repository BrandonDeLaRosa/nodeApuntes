const PostServices = require('../services/post.services');

const getAllPosts = async (req, res) => {
    try {
        const posts = await PostServices.getAll();
        res.json(posts)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getPostsWithAnswers = async (req,res) => {
    try {
        const {postId} = req.params;
        const postWithAnswers = await PostServices.postWithAnswers(postId);
        res.json(postWithAnswers)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createPost = async (req,res) =>{
    try {
        const newPost = req.body;
        const post = await PostServices.create(newPost);
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updatePost = async (req,res) => {
    try {
        const {id} = req.params;
        const postInfo = req.body;
        await PostServices.postUpdate(id,postInfo)
        res.status(204).json('No-Content')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deletePost = async (req,res) => {
    try {
        const {id} = req.params;
        await PostServices.deletedPost(id);
        res.status(201).send('deleted')
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    createPost,
    getPostsWithAnswers,
    getAllPosts,
    updatePost,
    deletePost
}