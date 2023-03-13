const Users = require('./user.models');
const Posts = require('./post.models');
const Categories = require ('./categories.models')


const initModels = () => {
    
    // TODO relaciones entre Users y Posts.  
    //* Users - Posts

    Users.hasMany(Posts, { foreignKey: 'user_id'})   //Tipo de relacion.
    Posts.belongsTo(Users, { foreignKey: "user_id"})  // un post pertenece a un usuario.

    //* POST - CATEGORIES.

    Categories.hasMany(Posts, {foreignKey: 'categoryId'})
    Posts.belongsTo(Categories, {foreignKey: 'categoryId'})

}

module.exports = initModels;