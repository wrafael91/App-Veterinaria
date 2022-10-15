import express from "express"
import db from "./config/db.js"
import dotenv from 'dotenv'
import VeterinarioRoutes from "./routes/veterinarioRoutes.js"

const app = express()

app.use(express.json())

dotenv.config()

db()

const PORT = process.env.PORT || 4000

app.use("/api/veterinarios", VeterinarioRoutes)

app.listen(PORT, () => {
    console.log(`Probando desde puerto ${PORT}`)
})