import mongoose from "mongoose";

const veterinarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    }
})

const Veterinario = mongoose.model("Veterinario", veterinarioSchema)

export default Veterinario