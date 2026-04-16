const OperatorsService = require("../services/OperatorsService")

const OperatorsController = {
    createOperators: async(req,res) => {
        try{
            const logged = req.user.id_loja
            const {name,email,password,admin} = req.body
          
            if (!name) {
                return res.status(422).json({message:"Nome não preenchido"})
            }
         
            if (!email) {
                return res.status(422).json({message:"Email não preenchido"})
            }
            if (!password) {
                return res.status(422).json({message:"Senha não preenchida"})
            }
            const data = await OperatorsService.createOperator({name,email,password,admin,logged});
            return res.json(data)

          }
            catch(e){
                return res.status(400).send({"error":e.message})
            }

    },

    getAll: async (req,res) => {
        try {   
            const logged = req.user.id_loja
            const data = await OperatorsService.getAll({logged});
            return res.json(data)
        }
        catch(err) {
            return  res.status(400).send({"error":err.message})
        }
    },

    deleteOperators: async (req,res) => {
        try{
            const logged = req.user.id_loja
            const user = req.user.id
            const {idParam} = req.params

            if (user == idParam)
                return res.status(400).send({"error":"Você não pode apagar o próprio usuário"})

            const data = await OperatorsService.deleteOperators({logged,idParam});
            return res.json(data)
          }
            catch(e){
                return res.status(400).send({"error":e.message})
            }
    },
    

}


module.exports = OperatorsController