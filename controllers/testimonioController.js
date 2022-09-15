import { Testimonio } from "../models/Testimonios.js";

const guardarTestimonio = async (req,res) => {

    //Validacion

    const {nombre, email, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
       errores.push({mensaje:'El nombre está vacío'});
    }
    if(email.trim() === ''){
        errores.push({mensaje:'El email está vacío'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje:'El mensaje está vacío'});
    }
    if(errores.length > 0){

        //Consultar testimoniales existentes

        const testimonios = await Testimonio.findAll(); 

        res.render('testimonios',{
            pagina : 'Tu opinion es muy valiosa para seguir mejorando', 
            errores,
            nombre,
            email,
            mensaje,
            testimonios
        })
    }else{
        //Se almacena en la DB

        try {
            await Testimonio.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/testimonios');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonio
}