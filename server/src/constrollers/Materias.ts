import { Request, Response } from 'express';
import { mateira } from '../models/materia';


/*
NO ANDA 
*/

export async function CrearMateria(req: Request, res: Response): Promise<void> {
    try {
        const { nombre, descripcion } = req.body;

        // Validar datos
        if (!nombre || !descripcion) {
            res.status(400).json({ message: 'Todos los campos son obligatorios' });
            return;
        }

        // Crear un nuevo documento en la colección
        const nuevaMateria = new materia({ 
            nombre, 
            descripcion 
        });
        await nuevaMateria.save();

        res.status(201).json({ message: 'Materia creada con éxito', data: nuevaMateria });
    } catch (err) {
        res.status(500).json({ message: 'Error al crear la materia', error: (err as Error).message });
    }
}