/*
|
|   Codigo ( Backend , Frontend )
|   creado por Magician Tech para ProA la Falda
|   
|   2025
|
*/
/*

/Proa/back/view/materias
/Proa/back/view/noticias
/Proa/back/view/promos
/Proa/back/view/materias

*/
//Express
import express, { Request, Response, NextFunction } from "express";
//Navegacion en los Archivos del Proyecto
import path from "path";
import { connectDB } from './db/conection'
//Variables De Entorno
import dotenv from 'dotenv' 
//Router
import api from "./router/api";
import view from "./router/view";
//import img from "./router/img";

dotenv.config();

const uri: any = process.env.URI; 

connectDB(uri);

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static(__dirname + '/public'));
app.use(express.json());

/*
app.use('/Proa/back/img', img);
*/
app.use('/Proa/back/api', api);
app.use('/Proa/back/view', view);

app.get('/', (req : Request, res : Response) => {
    res.json(
        {
            "mensaje" : "Bienvenido al backend de WEB ProA LAFalda"
        }
    )
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Muestra el error en los registros
    res.status(500).send('Algo salió mal!');
});

// Middleware para manejar 404
app.use((req : Request, res : Response) => {
    res.status(404).render('404', { mensage404: "La página no fue encontrada 404" });
});

app.listen(port, () => {
    console.log("Aplicacion Corriendo en", port);
});