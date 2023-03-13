// * Info para la conexion a base de datos.

const { Sequelize } = require('sequelize');  //! Importacion de sequelize package.

const db = new Sequelize({
    //! el orden de los elementos no importa
    database:"prueba_sequelize",
    port:5432,
    host: "localhost",
    username:"postgres",
    password:"ruth",
    dialect: "postgres"         //? <--- sistema gestor de base de datos usado.
});

module.exports = db;     //! Exportar.