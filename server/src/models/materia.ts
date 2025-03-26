import mongoose, { Document, Schema } from 'mongoose';

export interface Imaterias extends Document {
    nombre : String,
    profesor : String,
    imgProfesor : String,
    descripcion : String,  
    anio : number 
}

const MateriasSchema = new mongoose.Schema<Imaterias>({
    nombre : { type : String, required : true },
    profesor : { type : String, required : true},
    imgProfesor : { type : String, required : true},
    descripcion : { type : String, required : true},
    anio : { type : Number , required : true},       
}, { collection: "materias" });

export const mateira = mongoose.model<Imaterias>("materia", MateriasSchema);