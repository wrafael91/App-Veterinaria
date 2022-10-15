import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Probando desde api/veterinarios")
})

export default router