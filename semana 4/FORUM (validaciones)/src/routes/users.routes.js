const { Router } = require ('express');
const {createUser,updateUser,getAllUsers} = require('../controllers/user.controllers');
const { createUserValidator, updateUserValidator } = require('../validators/users.validator')



const router = Router();

router.get('/api/v1/user', getAllUsers)
router.post('/api/v1/user', createUserValidator, createUser)
router.put('/api/v1/user/:id', updateUserValidator, updateUser)

module.exports = router;