const Users = require('../models/user.models')


class UserServices {
    
    static async getAllUsers(){
        try {
            const users = await Users.findAll()
            return users
        } catch (error) {
            throw(error)
        }
    }

    static async createUser(newUser){
        try {
            const userCreated = await Users.create(newUser)
            return userCreated
        } catch (error) {
            throw(error)
        }
    }

    // static async updateUserData(id, name, lastname,username,password ){
    static async updateUserData(id, userInfo){
        try {
           
            const updateUser = await Users.update( userInfo, {
                where:{id}
            });
            
            console.log(updateUser);
            return updateUser
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = UserServices;