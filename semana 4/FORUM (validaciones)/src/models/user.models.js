const { DataTypes } = require ('sequelize');
const db = require('../utils/database');

const Users = db.define('users', {
    id: {
       type: DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement: true,
       allowNull: false
    },
    name: {
        type: DataTypes.STRING(30),
    },
    lastname: {
        type: DataTypes.STRING(30)
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique:true,
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull:false,
        unique:true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false
});

module.exports = Users;