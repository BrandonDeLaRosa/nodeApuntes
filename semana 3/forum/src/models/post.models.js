const { DataTypes } = require ('sequelize');
const db = require('../utils/database');

const Posts = db.define('posts', {
    id: {
       type: DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement: true,
       allowNull: false
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    descripction: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"category_id"
    }
}, {
    //! En caso de querer Eliminar las timestamps, se pueden 
    //! deshabilitar, en un tercer objeto.(nombre de tabla,objeto 1 y objeto 2).

    //? timestamps: false   <--- Elimina ambos timeStamps
    //? createdAt: false   <--- Elimina createdAt stamp
    //? updatedAt: false   <--- Elimina updatedAt stamp

    // timestamps:true,
    // updatedAt: false,
    // createdAt: "created_at"
    timestamps:false
});
module.exports = Posts;