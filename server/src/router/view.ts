import express, {Request, Response} from 'express';

import { verMaterias } from '../constrollers/Materias';


const router = express.Router();

router.use('/CrearMaterias', async (req : Request, res : Response) => {
    res.render('CrearMaterias');
});

router.use('/verMatrerias', verMaterias);

router.use('/noticias', async (req : Request, res : Response) => {
    res.render('noticias');
})


router.use('/promos', async (req : Request, res : Response) => {
    res.render('promos');
})

// Middleware para manejar 404
router.use(async (req : Request, res : Response) => {
    res.render('login');
});


router.use('/login', async (req : Request, res : Response) => {
    res.render('login');
});


/*
router.use('api/materias', (req : Request, res : Response) => {
    res.render('index');
})
*/

export default router;