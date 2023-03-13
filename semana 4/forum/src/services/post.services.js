const Posts = require ('../models/post.models')
const Answers = require('../models/answer.models');
const Categories = require('../models/categories.models');
const Users = require('../models/user.models');
const { post } = require('../routes/post.routes');


class PostServices{

    static async getAll(){
        try {
            const posts = await Posts.findAll({
                // attributes: {
                //     exclude:['descripction', 'userId', 'categoryId']
                // },
                // include: [
                //     {
                //         model: Users,
                //         attributes:['username']
                //     },
                //     {
                //         model: Categories,
                //         attributes: ['name']
                //     }
                // ]
            });
            return posts
        } catch (error) {
            throw(error)
        }
    } 

    static async postWithAnswers(postId) {
        try {
            const result = await Posts.findByPk(
                postId,
                {
                    attributes:{exclude: ["categoryId", "userId"]},
                    include: [
                        {
                            model: Users, attributes:["username", "email"]
                        },
                        {
                            model:Answers, attributes:["content"] //TODO    <----- ¿Como traer el nombre del usuario que creo la publicacion, no el id?
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


    static async create(newPost){
        console.log(newPost);
        try {
            const result = await Posts.create(newPost);
            return result
        } catch (error) {
            throw(error)
        }
    }

    static async postUpdate(id,postInfo){
        try {
            const updating= await Posts.update(postInfo,{
                where: {id}
            });
            // console.log(postInfo);
            return updating
        } catch (error) {
            throw(error)
        }
    }


    static async deletedPost(id){
        try {
            const deleting = await Posts.destroy({
                where:{id}
            });
            return deleting
        } catch (error) {
            throw(error)
        }
    }
   
}

module.exports = PostServices;