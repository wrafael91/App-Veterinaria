import VeterinarioModel from "../models/Veterinario.js"

const registrar = async(req, res) => {
    const {email} = req.body
    //Prevenir usuarios duplicados
    const existeUsuario = await VeterinarioModel.findOne({email})
    
    if(existeUsuario){
        const error = new Error("Usuario ya registrado")
        return res.status(400).json({msg: error.message})
    }

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

const confirmar = async (req, res) => {
    const {token} = req.params
    const usuarioConfirmar = await VeterinarioModel.findOne({token})
    if(!usuarioConfirmar){
        const error = new Error('token no valido')
        return res.status(404).json({msg: error.message})
    }

    try {
        usuarioConfirmar.token = null
        usuarioConfirmar.confirmado = true
        await usuarioConfirmar.save()
        res.json({msg: 'Usuario confirmado correctamente'})
    } catch (error) {
        console.log(error)
    }
    console.log(usuarioConfirmar)
}

export {registrar, perfil, confirmar}