const { DataTypes } = require ('sequelize'); //? Tipos de datos provenientes de sequelize
const db = require ('../utils/database')  //? <--- con esto tenemos la instacia de sequelize.

const User = db.define('users', {  //* Igual a CREATE DATABASE  users.  Este objeto es identico a una tabla creada en psql.
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate:{            //! <---  Validacion de email.
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
    }
});  

module.exports = User;