import mongoose, { Document } from 'mongoose';

export interface Iadmin extends Document{ 
    nombre : String,
    contraseña : String
}

const adminsSchemas = new mongoose.Schema<Iadmin>({
    nombre : {type : String, required : true},
    contraseña : {type : String, required : true}
});