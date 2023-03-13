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

    static async updateUserData(userData){
        try {
            const {id, userInfo} = userData
            console.log(userData);
            const updateUser = await Users.update(userInfo, {
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