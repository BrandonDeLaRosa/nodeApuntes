const { logError, errorHandler, ormErrorHandler } = require('../middlewares/error.handler');

const errorHandlerRoute = (app) => {     //! El parametro app hace referencia a la isntancia de express en app.js.
    app.use(logError);   //? SE MUESTRA EN CONSOLA. 
    app.use(ormErrorHandler); //! Va al inicio debido a que si el error no corresponde a validacion, pasara al sig error.
    app.use(errorHandler);   //? respuesta con el error, ya solo informacion concreta-  
    //! errorhandler no tiene next, por lo que si va antes que orm... ya no continuaria la cadena de errore.




    app.use('*', (req,res) =>{    //! este middleware response a todas las rutas no cubiertas por los enrutadores.
        return res.status(404).send('Page not found')
    });
}; 

module.exports = errorHandlerRoute;