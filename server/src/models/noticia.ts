import mongoose, { Document, Schema  } from 'mongoose';

export interface Inoticia extends Document {
    año : Number,
    mes : Number,
    dia : Number,
    titulo : String,
    noticia : String,
    miniatura : String,
}

const NoticiaSchema = new Schema<Inoticia>({
    año : {type : Number , required : true},
    mes : {type : Number , required : true},
    dia : {type : Number , required : false},
    titulo : {type : String, required : true},
    noticia : {type : String, required : true},
    miniatura : {type :  String, required : false},
});

export const noticia = mongoose.model<Inoticia>("noticia", NoticiaSchema);
