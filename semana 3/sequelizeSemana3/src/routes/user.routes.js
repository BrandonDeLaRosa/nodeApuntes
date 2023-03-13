const { Router } = require ('express');
const { where } = require('sequelize');
const User = require ('../models/users.model'); //! Se esta impotando el modelo = user.models.js (AHI vienen la abala creada).
const { getAllUsers,getUsersById } = require('../controllers/users.controllers')



const router = Router();

// router.get('/api/v1/users', async (req, res) => {          // ? Esto es ifual a un  SELECT * FROM User.
//     try {
//         const users = await User.findAll({
//             attributes: ["id","name", "email"],      //! Esto es === //? SELECT name,email,password FROM users;
//         });  
//         res.json(users);    // JSON:stringify(users)
//     } catch (error) {
//         res.status(400).json(error)
//     }
// });

router.get('/api/v1/users', getAllUsers);  // El codigo previo a esta linea esta ahora en controllers,
router.get('api/v1/users/:id', getUsersById);

// // ! Encontrar un usuario por su id (FIND BY PRIMARYKEY)

// router.get('/api/v1/users/:id', async (req, res) => {
//     try {
//         //obtener por params.
//         const { id } =req.params;
//         // consultar a la base de datos.
//         const user = await User.findByPk(id);
//         // Enviamos la respuesta al cliente.
//         res.json(user);
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// ! BUSQUEDA POR ALGUN PARAMETRO DIFERENTE A ID.

router.get("/api/v1/users/email/:email", async (req, res) =>{
    try {
        const { email }= req.params;
        const user = await User.findOne({
            where: {email},
            attributes: ["id","name", "email"]
        }) ;
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post('/api/v1/users', async (req,res) => {        //? igual a un INSERT INTO
    try {
        const newUser = req.body;
        console.log(newUser);
        const result  = await User.create(newUser);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).json(error);   //* Enviando en formato json el error
    }
});  

router.delete("/api/v1/users/:id", async (req,res) => {
    const { id } = req.params;  //! aqui nos trae el id, que coloquemos.
    // res.send(id);
    try {
        const result = await User.destroy({
            where: {id}
        });
        res.status(204).send()
        // id: (el valor que tenga un id);
    } catch (error) {
        res.status(400).json(error);
    }
});    

router.put("/api/v1/users/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        await User.update(data, {
            where: {id}
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router;