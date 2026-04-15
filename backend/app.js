import express from 'express';
import cookieParser from 'cookie-parser';
import clientRoutes from "./src/routes/clients.js"
import registerClientRoutes from "./src/routes/registerClient.js"

//Creo una constante que es igual a la libreria express
const app = express();

app.use(cookieParser());

//Para que la API acepte JSON
app.use(express.json());

app.use("/api/clients", clientRoutes);
app.use("/api/registerClient", registerClientRoutes);

export default app;