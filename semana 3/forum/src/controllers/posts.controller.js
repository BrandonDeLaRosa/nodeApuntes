const PostServices = require('../services/post.services');


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

module.exports = {
    createPost,
    getPostsWithAnswers,
}