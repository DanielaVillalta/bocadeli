import express from 'express';
import cookieParser from 'cookie-parser';


//Creo una constante que es igual a la libreria express
const app = express();

app.use(cookieParser());

//Para que la API acepte JSON
app.use(express.json());

app.use("/api/pizzas", pizzasRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/employee", employeesRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/registerCustomer", registerCustomerRoutes);
app.use("/api/registerEmployee", registerEmployeeRoutes);

export default app;