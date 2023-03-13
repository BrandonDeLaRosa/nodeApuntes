const { check, param } = require('express-validator');
const validateResult = require('../utils/validate');



const createUserValidator = [

    check('username', 'El nombre de usuario no debe estar vacio')
        .exists()
        .withMessage('El username debe existir')
        .notEmpty()
        .withMessage('El username no debe estar vacio')
        .isString()
        .withMessage('El username debe ser texto')
        .isLength({ min: 6, max: 30 })
        .withMessage('el username deve tener mas de 6 caracteres.'),

    check("email", "error con el correo electronico")
        .exists()
        .withMessage('No se encontro la propiedad email')
        .notEmpty()
        .withMessage('No se encontro un valor email')
        .isString()
        .isLength({ min: 6, max: 50 }) //? a@.com
        .isEmail()
        .withMessage('El correo no tiene el formato correcto'),

    check("password", "Error en la contraseña")
        .exists()
        .withMessage('Debes escribir tu contraseña')
        .isString()
        .withMessage('La contraseña debe incluir texto y numeros')
        .isLength({ min: 7 })
        .withMessage('La contraseña debe ser mayor a 7 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    },

];

const updateUserValidator = [

    param("id").isInt().withMessage("El id debe ser numero entero"),

    check("name")
        .isString()
        .withMessage('El name debe ser texto')
        .exists()
        .withMessage('No se encuentra el usuario')
        .notEmpty()
        .withMessage('El nombre no debe ser string vacio'),

    check("email", "El correo no puede ser alterado")    //! En app NO DEBE SER POSIBLE CAMBIAR EL EMAIL.
        .not()
        .exists(),  // <-- con este not se indica que apesar de enviarse, el correo no puede alterarse
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    createUserValidator,
    updateUserValidator,
};

/*

[
    check('username','El nombre de usuario no debe estar vacio')
    .exists()
    .withMessage('El username debe existir')
    .notEmpty()
    .withMessage('El username no debe estar vacio')
    .isString()
    .withMessage('El username debe ser texto')
    .isLength({min: 6, max:30})
    .withMessage('el username deve tener mas de 6 caracteres.'),

  check("email", "error con el correo electronico")
  .exists()
  .withMessage('No se encontro la propiedad email')
  .notEmpty()
  .withMessage('No se encontro un valor email')
  .isString()
  .isLength({min:6 ,max:50}) //? a@.com
  .isEmail()
  .withMessage('El correo no tiene el formato correcto'),

  check()
  .exists()
  .isString()
  .isLength(),
 (req,res,next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(400).json({errors: error.array()})
    }
 }
]; 






router.post('/api/v1/user', 
[
    check("username", "El nombre de usuario no debe estar vacio.")
    .exists()
    .withMessage('El username debe existir')
    .notEmpty()
    .withMessage('El username no debe estar vacio')
    .isString()
    .withMessage('El username debe ser texto')
    .isLength({min: 6})
    .withMessage('El username debe tener minimo 6 caracteres'),  
    (req,res,next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(400).json({errors: error.array()})
        }
    }
],
createUser 
);



VALIDAR LOS ID´S QUE LLEGAN DESDE REQ.PARAMS;

*/