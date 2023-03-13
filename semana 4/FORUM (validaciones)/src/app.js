const express = require ('express');
const cors = require ('cors');
const morgan = require ('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const UserRoutes = require('./routes/users.routes');
const PostsRoutes = require('./routes/post.routes')
const answersRoutes = require ('./routes/answers.routes');
const errorHandlerRoute = require ('./routes/errorHandler.routes')


initModels();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

db.authenticate()
.then(() => {
    console.log('Conexion exitosa OK:)');
})
.catch ((error) => {
    console.log(error);
});

 
db.sync() 
// db.sync({ force: true})  //! Elimino toda la estructura der la bd y la volvio a crear.
// db.sync({ force: true})  //! Este ayuda a que al momento de ejecutar el servidor boprra bd y vuelv ea crear todo.  (SE RECOMIENDA NO USARLO A MENOS QUE SE TENGA UN BACKUP)
// db.sync({ alter: true})  //! permite alterar la base de datos.

 .then(() => {
   console.log('Base de datos sincronizada. :)');
 })
  .catch((error) =>{
    console.log(error);
});

const PORT = 8000;

app.use(UserRoutes);
app.use(PostsRoutes);
app.use(answersRoutes);

app.get('/', (req,res) => {
    res.send('welcome to my API');
});

errorHandlerRoute(app);

app.listen(PORT ,() => {
    console.log(`Servidor escuchando el puerto ${PORT}`);
});




// Crear un  backend kanban