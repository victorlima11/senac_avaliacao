import userService from '../services/clienteServices.js'

const getAll = async (req, res) =>{
    try{
        const result = userService.getAll()
        return res.status(200).json(result)
    }catch(err){
        res.status(400).json({erro: err})
    }
}

export default { getAll }