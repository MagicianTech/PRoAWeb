import { Request, Response } from 'express';
import { mateira } from '../models/materia';


export async function CrearMateria(req: Request, res: Response): Promise<void> {
    try {
        console.log('Datos recibidos:', req.body); // Verifica qué está llegando

        const { nombre, imagenProfesor, nombreProfesor, descripcion, anio } = req.body;

        // Validar que todos los datos estén presentes
        if (!nombre || !nombreProfesor || !descripcion || !anio) {
            res.status(400).send('Todos los campos son obligatorios');
            return;
        }

        // Crear el documento en MongoDB
        const nuevaMateria = new mateira({ nombre, nombreProfesor, imagenProfesor,  descripcion, anio });
        await nuevaMateria.save();
        console.log('Se envio correcramente', nuevaMateria);
        // Redirigir a la página de éxito
        res.redirect('/'); // O podrías redirigir a una página de confirmación
    } catch (err) {
        res.status(500).send('Error al crear la materia: ' + (err as Error).message);
    }
}
