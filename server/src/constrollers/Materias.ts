import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { mateira } from '../models/materia';

export async function CrearMateria(req: Request, res: Response): Promise<void> {
    try {
        console.log('Datos recibidos:', req.body); // Verifica qué está llegando

        const { nombre, profesor, imgProfesor, descripcion, anio } = req.body;


        if (anio > 6 || anio < 1 ){
            res.status(400).send('El año debe etar dentro de 1 y 6')
            return;
        }

        // Validar que todos los datos estén presentes
        if (!nombre || !profesor || !imgProfesor || !descripcion || !anio) {
            res.status(400).send('Todos los campos son obligatorios');
            return;
        }

        // Crear el documento en MongoDB
        const nuevaMateria = new mateira({ nombre, profesor, imgProfesor,  descripcion, anio });
        await nuevaMateria.save();
        console.log('Se envio correcramente', nuevaMateria);
        // Redirigir a la página de éxito
        res.redirect('/Proa/back/view/materias'); // O podrías redirigir a una página de confirmación
    } catch (err) {
        res.status(500).send('Error al crear la materia: ' + (err as Error).message);
    }
}

export async function verMaterias(req : Request, res : Response) {
    try{
        const ArrayMaterias = await mateira.find();
        res.render('VerMaterias', {ArrayMaterias});
    }   catch ( err ){
        res.status(500).send('Error al renderizar la materia: ' + (err as Error).message);
    } 
}


//Delete
export const BorrarMateria = async (req: Request, res: Response)  =>  {

    const { id } = req.params;
    const materia = await mateira.findByIdAndDelete(id);

    
};