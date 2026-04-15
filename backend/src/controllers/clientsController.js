import clientsModel from "../models/clients.js"

//Creo un array de funciones
const clientsController = {};

//SELECT
clientsController.getClients = async (req, res) => {
    try {
        const clients = await clientsModel.find();
        return res.status(200).json(clients)
    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({ message: "Internal server error" })
    }
};

//UPDATE
clientsController.updateClient = async (req, res) => {
    try {
        //#1- Solicitar los nuevos datos
        let {
            name,
            lastName,
            email,
            password,
            phone,
            address,
            isVerified,
        } = req.body;

        //VALIDACIONES
        //Sanitizar
        name = name?.trim();
        lastName = lastName?.trim();
        email = email?.trim();
        password = password?.trim()
        phone = phone?.trim()

        //Validar campos required
        if (!name || !lastName || !email || !password) {
            return res.status(400).json({ message: "Fields required" })
        }

        //Longitud de carácteres
        if (name.length < 3 || name.length > 15) {
            return res.status(400).json({ message: "Please insert a valid name" })
        }

        if (lastName.length < 3 || lastName.length > 15) {
            return res.status(400).json({ message: "Please insert a valid last name" })
        }

        //Actualizamos en la base de datos 
        const clientUpdated = await clientsModel.findByIdAndUpdate(req.params.id, {
            name,
            lastName,
            email,
            password,
            phone,
            address,
            isVerified,
        }, { new: true });

        if (!clientUpdated) {
            return res.status(404).json({ message: "Client not found" })
        }

        return res.status(200).json({ message: "Client updated" });
    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

//ELIMINAR
clientsController.deleteClient = async (req, res) => {
    try {
        const deletedClient = clientsModel.findByIdAndDelete(req.params.id);

        if (!deletedClient) {
            return res.status(404).json({ message: "Client not found" })
        }
        return res.status(200).json({ message: "Client deleted" });
    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export default clientsController;