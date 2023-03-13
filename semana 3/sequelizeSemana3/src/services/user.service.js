//* 
const User = require('../models/users.model')


class UserServices{    //! Esto es global para todo el proyecto.

    static async getAll (){
        try {
            const users = await User.findAll()
            return users;
        } catch (error) {
            throw(error)
        }
     }


     static async getById(id) {
        try {
            const user = User.findByPk(id,{
                attributes: ["id","name", "email"] 
            });
        } catch (error) {
            throw(error)
        }
     }
     
}

module.exports = UserServices;