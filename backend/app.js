import express from 'express';
import cookieParser from 'cookie-parser';

import clientRoutes from "./src/routes/clients.js"
import registerClientRoutes from "./src/routes/registerClient.js"
import employeeRoutes from "./src/routes/employees.js"
import registerEmployeeRoutes from "./src/routes/registerEmployee.js"

//Creo una constante que es igual a la libreria express
const app = express();

app.use(cookieParser());

//Para que la API acepte JSON
app.use(express.json());

app.use("/api/clients", clientRoutes);
app.use("/api/registerClient", registerClientRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/registerEmployee", registerEmployeeRoutes)

export default app;