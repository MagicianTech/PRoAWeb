import express, {Request, Response} from 'express';

import { BorrarMateria, verMaterias } from '../constrollers/Materias';


const router = express.Router();

router.use('/CrearMaterias', async (req : Request, res : Response) => {
    res.render('m_CrearMaterias');
});

router.use('/verMatrerias', verMaterias);

router.use('/BorrarMateria', async (req : Request, res : Response) => {
    res.render("m_BorrarMateria", { id: req.query.id || "" });
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