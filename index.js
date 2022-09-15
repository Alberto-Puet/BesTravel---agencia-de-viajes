import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';



const app = express();

//Conectar db
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

//Definir puerto

const port = process.env.PORT || 4000;

//Habilitar Pug                                                               //TODOS ESTOS SON MIDDLEWARES
app.set('view engine', 'pug');

//Obtener año actual
app.use((req,res,next) => {    
    res.locals.unaVariable = 'Otra variable'
    const year = new Date();
    
    res.locals.actualYear = year.getFullYear();
    res.locals.nombrePagina = 'Agencia de viajes';
    next();
});

//Agregar body parser para leer los datos del form
app.use(express.urlencoded({extended: true}));

//Definir la carpeta public

app.use(express.static('public'));

//Agregar router

app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})