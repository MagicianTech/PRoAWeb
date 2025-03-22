import express, {Request, Response} from 'express';

//Materias Controller
import { CrearMateria } from '../constrollers/Materias';


const router = express.Router();

// Materias
router.use('api/materias', )

router.get('api/crearMaterias', CrearMateria)
router.delete('')


//Promos


//Noticias


//Buqueda

export default router;