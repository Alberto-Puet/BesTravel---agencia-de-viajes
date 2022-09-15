import express from "express";
import {pagInicio,pagNosotros,pagViajes,pagTestimonios,pagInformacionViaje} from '../controllers/paginasControler.js'
import {guardarTestimonio} from '../controllers/testimonioController.js'

const router = express.Router();

router.get('/',pagInicio); 

router.get('/nosotros',pagNosotros );

router.get('/viajes',pagViajes );

router.get('/viajes/:slug',pagInformacionViaje );

router.get('/testimonios',pagTestimonios );
router.post('/testimonios',guardarTestimonio);

export default router;