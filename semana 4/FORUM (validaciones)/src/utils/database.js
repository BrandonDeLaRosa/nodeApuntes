const { Sequelize } = require ('sequelize');

const db = new Sequelize({
    database: "foro1",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "ruth",
    dialect:"postgres",
    logging: false    //! <---- ELIMINA TODO EL CODIGO EXTRA RESPECTO A BD
});

module.exports = db;