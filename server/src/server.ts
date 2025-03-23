/*
|
|   Codigo ( Backend , Frontend )
|   creado por Magician Tech para ProA la Falda
|   
|   2025
|
*/
/*
  RUTAS
----------

--Views--
/Proa/back/view/materias
/Proa/back/view/noticias
/Proa/back/view/promos
/Proa/back/view/login

--APIS--
/Proa/back/api/


*/
//Express
import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';
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

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 📌 Necesario para recibir datos de formularios
/*
app.use('/Proa/back/img', img);
*/
app.use('/Proa/back/api', api);
app.use('/Proa/back/view', view);

app.get('/', (req : Request, res : Response) => {
    res.redirect('https://client-rosy-ten.vercel.app/')
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Muestra el error en los registros
    res.redirect('https://client-rosy-ten.vercel.app/')
});

// Middleware para manejar 404
app.use((req : Request, res : Response) => {
    res.json({
        message : "404 temporal"
    })
});

app.listen(port, () => {
    console.log("Aplicacion Corriendo en", port);
});