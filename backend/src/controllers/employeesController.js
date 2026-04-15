//#1- Creo un array de funciones
const employeesController = {};

//#2- Importo el Schema que voy a utilizar
import employeesModel from "../models/employees.js";

//SELECT
employeesController.getEmployees = async (req, res) => {
    try {
        const employees = await employeesModel.find();
        return res.status(200).json(employees);
    } catch (error) {
        console.log("error" + error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

//DELETE
employeesController.deleteEmployees = async (req, res) => {
    try {
        const employee = await employeesModel.findByIdAndDelete(req.params.id);

        //Si no se elimina
        if (!deleteEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        return res.status(200).json({ message: "Employee deleted" });
    } catch (error) {
        console.log("error" + error);
    }
};

//UPDATE
employeesController.updateEmployee = async (req, res) => {
    try {
        const employeeUpdated = await employeesModel.findByIdAndUpdate(
            req.params.id,
            {
                name,
                lastName,
                email,
                password,
                role,
                salary,
                phone,
                isVerified,
            },
            { new: true },
        );
        //VALIDACIONES
        //Sanitizar
        employeeUpdated.name = employeeUpdated.name?.trim();
        employeeUpdated.lastName = employeeUpdated.lastName?.trim();
        employeeUpdated.email = employeeUpdated.email?.trim();
        employeeUpdated.password = employeeUpdated.password?.trim()
        employeeUpdated.phone = employeeUpdated.phone?.trim()

        //Validar campos required
        if (!employeeUpdated.name || !employeeUpdated.lastName || !employeeUpdated.email || !employeeUpdated.password) {
            return res.status(400).json({ message: "Fields required" })
        }

        //Longitud de carácteres
        if (employeeUpdated.name.length < 3 || employeeUpdated.name.length > 15) {
            return res.status(400).json({ message: "Please insert a valid name" })
        }

        if (employeeUpdated.lastName.length < 3 || employeeUpdated.lastName.length > 15) {
            return res.status(400).json({ message: "Please insert a valid last name" })
        }

        if(employeeUpdated.phone.length !== 9) {
            return res.status(400).json({ message: "Please insert a valid last number" })
        }

        if (!updateEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        return res.status(200).json({ message: "Employee updated" });
    } catch (error) {
        console.log("error" + error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default employeesController;