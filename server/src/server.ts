import express, {Request, Response} from "express";

const api = require('./router/api');
const img = require('./router/img');
const view = require('./router/view');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());


app.use('/Proa/back/api', api);
app.use('/Proa/back/img', img);
app.use('/Proa/back/view', view);

app.get('/', (req : Request, res : Response) => {
    res.json(
        {
            "mensaje" : "Bienvenido al backend de WEB ProA LAFalda"
        }
    )
});


app.listen(port, () => {
    console.log("Aplicacion Corriendo en", port);
});