const { DataTypes } = require ('sequelize');
const db = require('../utils/database');

const answers = db.define('answers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
     },
     content: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    },

    postId:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = answers; 


/*
{"content": "No lo se brou, quizas no has dormido por programar","author": 1, "postId": 3}


*/