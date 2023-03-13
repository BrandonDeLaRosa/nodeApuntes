const { Router } = require ('express');
const Posts = require('../models/post.models');
const Users = require('../models/user.models');
const {createUser,updateUser,getAllUsers} = require('../controllers/user.controllers')


const router = Router();

router.get('/api/v1/user', getAllUsers)
router.post('/api/v1/user', createUser)
router.put('/api/v1/user/:id', updateUser)

// router.get('/api/v1/users/:id/posts',async (req,res) =>{
//     try {
//         const {id} = req.params;
//         const userPosts = await Users.findByPk(id, 
//             { 
//                attributes: ['username'], 
//                 include: {
//                     model: Posts,
//                     // attributes:["title"]    
//                 }
//             });
//             res.send(userPosts)
//     } catch (error) {
//         res.status(400).json(error);
//     }
// });

module.exports = router;