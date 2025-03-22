import express, {Request, Response} from 'express';

import { mateira } from '../models/materia';



const router = express.Router();

router.use('/materias', async (req : Request, res : Response) => {
    res.render('materias');
})

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