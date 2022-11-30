import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import generarId from "../helpers/generarId.js"

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
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: generarId()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
})

veterinarioSchema.pre('save', async function(next) {
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const VeterinarioModel = mongoose.model("Veterinario", veterinarioSchema)

export default VeterinarioModel