const UserServices = require('../services/user.services')

const getAllUsers = async (req,res) => {
    try {
        const users = await UserServices.getAllUsers();
        res.json(users)
    } catch (error) {
        res.status(400).json(error) 
    }
}

const createUser = async (req,res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.createUser(newUser)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const userInfo = req.body;
        const userData = {id,userInfo}
        await UserServices.updateUserData(userData)
        res.status(204).send()

    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports= {
    createUser,
    updateUser,
    getAllUsers
}