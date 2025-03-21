import express, {Request, Response} from 'express';

const router = express.Router();

router.use('/', async (req : Request, res : Response) => {
    res.render('index.ejs');
})
/*
router.use('api/materias', (req : Request, res : Response) => {
    res.render('index');
})
*/

export default router;