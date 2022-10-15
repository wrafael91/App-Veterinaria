import VeterinarioModel from "../models/Veterinario.js"


// const registrar = async(req, res) => {
//     try {
//         const veterinario = new VeterinarioModel(req.body)
//         const veterinarioGuardado = await veterinario.save()
//         res.json({msg:"Probando desde api/veterinarios"})
//     } catch (error) {
//         console.log(error)
//     }
// }


const registrar = (req, res) => {

    try {     
        const veterinario = new VeterinarioModel(req.body)
        const veterinarioGuardado = veterinario.save()
        res.json({msg: "Registrando perfil"})
    } catch (error) {
        console.log(error)
    }

}

const perfil = async(req, res) => {
    res.json({msg: "consultando perfil..."})
} 


export {registrar, perfil}