import express from "express"
import db from "./config/db.js"
import dotenv from 'dotenv'

const app = express()

dotenv.config()

db()

const PORT = process.env.PORT || 4000

app.use("/", (req, res) => {
    res.send("Hola mundo desde puerto 4000")
})

app.listen(PORT, () => {
    console.log(`Probando desde puerto ${PORT}`)
})