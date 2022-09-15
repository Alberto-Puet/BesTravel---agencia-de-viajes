import { Testimonio } from "../models/Testimonios.js";
import { Viaje } from "../models/Viaje.js";

const pagInicio = async (req,res) => {

    // Consulta tres viajes del modelo de Viaje para mostrarlos

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit:3 }));
    promiseDB.push( Testimonio.findAll({ limit:3 }));

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('Inicio',{
            pagina:'Inicio',
            clase:'home',
            viajes:resultado[0],
            testimonios:resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

    
};

const pagNosotros = (req,res) => {
    res.render ('nosotros', {
        pagina : 'Nosotros'  
    });
}

const pagViajes = async(req,res) => {                                             // Model View Controller
    //consultar BD
    const viajes = await Viaje.findAll();

    res.render ('viajes', {
        pagina : 'Viajes Disponibles',
        viajes,  
    });
}

const pagTestimonios = async (req,res) => {

    try {
    const testimonios = await Testimonio.findAll();  
    res.render ('testimonios', {
        pagina : 'Tu opinion es muy valiosa para seguir mejorando',
        testimonios  
    });  
    } catch (error) {
        console.log(error);
    }

}

//Informacion de cada viaje

const pagInformacionViaje = async (req,res) => {

    const {slug} = req.params;

    try {
       const viaje = await Viaje.findOne({where : { slug }});
       res.render('viaje', {
        pagina: 'Informacion Viaje',
        viaje
       })          
    } catch (error) {
        console.log(error);
     }
}
export {
    pagInicio,
    pagNosotros,
    pagViajes,
    pagTestimonios,
    pagInformacionViaje
}