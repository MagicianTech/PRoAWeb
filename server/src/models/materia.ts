import mongoose, { Document, Schema } from 'mongoose';

export interface Imaterias extends Document {
    nombre : String,
    profesor : String,
    imgProfesor : String,
    Descripcion : String,   
}

const MateriasSchema = new mongoose.Schema<Imaterias>({
    nombre : { type : String, required : true },
    profesor : { type : String, required : true},
    imgProfesor : { type : String, required : false},
    Descripcion : { type : String, required : true},       
});

export const mateira = mongoose.model<Imaterias>("materia", MateriasSchema);