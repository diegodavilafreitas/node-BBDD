// como necesitamos express lo llamamos ocn el require
const express= require('express');
const morgan = require('morgan');
// initializations
// express al ejecutarse devuelve un objeto y lo almacenamos en la constante app
const app = express();

//settings
// Definimos todas las configuraciónes como en este caso el puerto al que nos conectamos.
app.set('port', process.env.PORT || 4000);

// Middlewares.
// son funciones que se ejecutan cada vez que un usuario envia una peticion
// así es como se le indica que se use morgan que es una extensión que nos va a mostrar por consola todo lo que llega al servidor.
app.use(morgan('dev'));

//Global variables


//Rutas


// Public

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port: "+app.get('port'));
});