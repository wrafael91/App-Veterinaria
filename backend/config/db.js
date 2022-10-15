import mongoose from "mongoose"

const db = async() => {
    try {
        const urlDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then((respuesta) => console.log("Conexión exitosa a base de datos"))
    } catch (error) {
        console.log("Hubo un error en la conexión a la base de datos")
    }
}

export default db