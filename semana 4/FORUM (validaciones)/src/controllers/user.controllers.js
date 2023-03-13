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
    
    // try {
    //     const {id} = req.params;
    //     const { name, lastname, username, password } = req.body;
    //     await UserServices.updateUserData(id, {name, lastname,username,password })
    //     res.status(204).send('Updated')

    // } catch (error) {
    //     res.status(400).json(error)
    // }

    try {
        const {id} = req.params;
        const userInfo = req.body;
        await UserServices.updateUserData(id, userInfo)
        res.status(204).send('Updated')

    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports= {
    createUser,
    updateUser,
    getAllUsers
}