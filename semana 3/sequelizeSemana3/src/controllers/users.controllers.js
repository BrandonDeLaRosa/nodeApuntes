const UserServices = require('../services/user.service')

const getAllUsers = async (req, res) => {        // ? Esto es ifual a un  SELECT * FROM User.
    try {
        const users = await UserServices.getAll();  
        res.json(users);    // JSON:stringify(users)
    } catch (error) {
        res.status(400).json(error);
    }
};

const getUsersById =async (req,res) => {
    try {
        //obtener por params.
        const { id } =req.params;
        // consultar a la base de datos.
        const user = await UserServices.getById(id);
        // Enviamos la respuesta al cliente.
        res.json(user);
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    getAllUsers,
    getUsersById
}


// Este controlador es una funcion asincrona que se encarga de recibir todos los usuarios.