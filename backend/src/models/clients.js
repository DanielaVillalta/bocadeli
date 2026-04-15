/*
Campos:
    name
    lastName
    email
    password
    phone
    address
    isVerified
*/

import mongoose, { Schema, model } from "mongoose";

const clientsSchema = new Schema ({
    name: {type: String},
    lastname: {type: String},
    email: {type: String},
    password: {type: String},
    phone: {type: String},
    address: {type: String},
    isVerified: {type: Boolean},
}, {
    timeStamps: true,
    strict: false
})

export default model ("Clients", clientsSchema)