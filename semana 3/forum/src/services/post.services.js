const Posts = require ('../models/post.models')
const Answers = require('../models/answer.models');
const Categories = require('../models/categories.models');


class PostServices{

    static async create(newPost){
        console.log(newPost);
        try {
            const result = await Posts.create(newPost);
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async postWithAnswers(postId) {
        try {
            const result = await Posts.findByPk(
                postId,
                {
                    attributes:{exclude: ["categoryId"]},
                    include: [
                        {
                            model:Answers,
                        } ,
                        {
                            model:Categories,
                            attributes:["name"]
                        } ,

                    ]
                }
            );
            return result
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = PostServices;