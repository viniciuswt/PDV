const MethodsService = require("../services/MethodsService")

const MethodsController = {
    createMethods: async(req,res) => {
        try{
            const logged = req.user.id_loja
            const {nome} = req.body
          
            if (!nome) {
                return res.status(422).json({message:"Nome não preenchido"})
            }
         
          
            const data = await MethodsService.createMethod({nome,logged});
            return res.json(data)

          }
            catch(e){
                return res.status(400).send({"error":e.message})
            }

    },

    getAll: async (req,res) => {
        try {   
            const logged = req.user.id_loja
            const data = await MethodsService.getAll({logged});
            return res.json(data)
        }
        catch(err) {
            return  res.status(400).send({"error":err.message})
        }
    },

    deleteMethods: async(req,res) => {
        try{
            const logged = req.user.id_loja
            const {idParam} = req.params
            const data = await MethodsService.deleteMethod({logged,idParam});
            return res.json(data)
          }
            catch(e){
                return res.status(400).send({"error":e.message})
            }
},

    

}

//
module.exports = MethodsController