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


const registrar = async(req, res) => {

    try {     
        const veterinario = new VeterinarioModel(req.body)
        const veterinarioGuardado = await veterinario.save()
        res.json(veterinarioGuardado)
    } catch (error) {
        console.log(error)
    }

}

const perfil = async(req, res) => {
    res.json({msg: "consultando perfil..."})
} 


export {registrar, perfil}