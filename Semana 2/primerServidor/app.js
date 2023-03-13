const express = require('express')
const morgan = require('morgan')
const examplesRoutes = require ('./routes/example.routes')


const app = express() // Crea una instancia de express en la variable app.
//va a antender  una peticion del tipo GET en la ruta raiz.

app.use('/', (req,res,next) => {
  console.log('RESPONDIENDO TODAS LAS PETICIONES');
  next();
});

/* 
? La peticion get recibe dos objetos (request y response)
?requestes= Toda la info que se envia en la peticon (body, headers  method, etc)
*/


const logger = (req,res,next) => {   // este middleware lo creamos de cero y solo nos trae la fecha.
    //? opcion uno de llamar objeto req.
    // const method = req.method;
    // const path = req.path;  
    //? opcion 2 para llamr objeto req  con destructuring
    const {method, path, ip, protocol} = req;
    console.log({method, path, ip, protocol});
    next();  // <-- sin este en postman y thunderclient se quedara cargando 
}

const requestTime = (req,res,next) =>{
    const date = Date.now();
    req.tiempoYFecha = date; //<-- objeto creado dentro del 
    next();
}

app.use(logger, requestTime); //<-- middleware a nivel e app.
app.use(express.json()); // middleware incorporado dentro de un middleware app level.
app.use(morgan("dev")); // middleware de terceros(cambia el formato en el que nos entrega la info).
app.use(examplesRoutes()); //middleware a nivel de rutas.


//! TODOS ESTOS SON MIDDLEWARES.

// app.get(
//     '/', logger, requestTime,(req, res, next) => {
//         console.log(req.tiempoYFecha); // <-- este nos da un codigo para pasarlo a codigo utf.
//    res.send ("hello world");
// });
// app.post(
//     '/', logger,(req, res, next) => {
//    res.send ("Estas haciendo post");
// });
// app.delete(
//     '/', logger,(req, res, next) => {
//    res.send ("Estas haciendo delete ");
// });
// app.put(
//     '/', logger,(req, res, next) => {
//    res.send ("Estas haciendo put");
// });

//! TODOS ESTOS SON MIDDLEWARES.

//? el puerto debe estar entre 1024 -- 65535
app.listen(1025, () => {
    console.log('Servidor corriendo en el puerto 1025');
})