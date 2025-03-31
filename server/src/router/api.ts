
import express, {Request, Response} from 'express';

//Materias Controller
import { CrearMateria, BorrarMateria } from '../constrollers/Materias';


const router = express.Router();

// Materias
//router.use('api/materias', )
router.post('/crearMaterias', CrearMateria)
router.delete('/borrarMateria/:id', BorrarMateria)



//Promos


//Noticias






export default router;