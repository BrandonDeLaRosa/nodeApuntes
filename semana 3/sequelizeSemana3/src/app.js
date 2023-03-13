const express = require('express');
const db = require('./utils/database')   //! <--  NO IMPORTA EL NOMBRE DEL ARCHIVO ORGINAL, AQUI SE PUEDE REENOMBRAR.
const User = require ('./models/users.model')   //! <--  NO IMPORTA EL NOMBRE DEL ARCHIVO ORGINAL, AQUI SE PUEDE REENOMBRAR.
const userRoutes = require('./routes/user.routes')  //! <--  NO IMPORTA EL NOMBRE DEL ARCHIVO ORGINAL, AQUI SE PUEDE REENOMBRAR.
// const cors = require('')

const PORT = 1026;
db.authenticate()   //! Primero se autentica, si todo ok, se deben crear los modulos.
.then(() => {
    console.log('Conectado a base de datos OK :)')
})
.catch(
    (error) => {
        console.log(error);
    }
)

  
db.sync()    //! ESTA LINEA SINCRONIZA LA CON LA BASE DE DATOS.  Una vez creados los modulos se puede sincronizar.
.then(() => {
    console.log('Base de datos sincronizada');
})
.catch( 
    (error)=> {
}
)

const app = express();
// app.use(cors());
app.use(express.json()); //! Sin este middleware, al hacer un post put, delete, saldra undefined.

app.use(userRoutes);   //! aqui hay una ruta funcionando con la base de datos.

app.get('/', (req,res) =>{
    res.send('Bienvenido al servidor');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});