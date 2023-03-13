const Users = require('./user.models');
const Posts = require('./post.models');
const Categories = require ('./categories.models');
const answers = require('./answer.models');


const initModels = () => {
    // TODO relaciones entre Users y Posts.
    
    //* Users - Posts

    Users.hasMany(Posts, { foreignKey: 'userId'})   //Tipo de relacion.
    Posts.belongsTo(Users, { foreignKey: "userId"})  // un post pertenece a un usuario.

    //* POST - CATEGORIES.

    Categories.hasMany(Posts, {foreignKey: 'categoryId'})
    Posts.belongsTo(Categories, {foreignKey: 'categoryId'})

    // * USERS-ANSWERS.

    Users.hasMany(answers, {foreignKey: "userId"})
    answers.belongsTo(Users, {foreignKey: "userId"})

    // * POSTS-ANSWERS

    Posts.hasMany(answers, {foreignKey: "postId"})
    answers.belongsTo(Posts, {foreignKey:"post_id"})
    
}

module.exports = initModels;