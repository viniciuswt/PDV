const SalesBoxService = require("../services/SalesBoxService")

const SalesBoxController = {
    createSalesBox: async(req,res) => {
        try{
            const logged = req.user.id_loja
            const {nome} = req.body
            if (!nome) {
                return res.status(422).json({message:"Nome não preenchido"})
            }
            const data = await SalesBoxService.createdSaleBox({nome,logged});
            return res.json(data)

          }
            catch(e){
                return res.status(400).send({"error":e.message})
            }

    },

    openSaleBox: async(req,res) => {
            try{
                const logged = req.user.id_loja
                const {id,dinheiro_atual} = req.body
                const data = await SalesBoxService.openSaleBox({logged,id,dinheiro_atual});
                return res.json(data)
              }
                catch(e){
                    return res.status(400).send({"error":e.message})
                }
    },

    deleteSaleBox: async(req,res) => {
        try{
            const logged = req.user.id_loja
            const {id} = req.params
            const data = await SalesBoxService.deleteSaleBox({logged,id});
            return res.json(data)
          }
            catch(e){
                return res.status(400).send({"error":e.message})
            }
},


    closeSaleBox: async(req,res) => {
        try{
            const logged = req.user.id_loja
            const {id,dinheiro_atual} = req.body
            const data = await SalesBoxService.closeSaleBox({logged,id,dinheiro_atual});
            return res.json(data)
          }
            catch(e){
                return res.status(400).send({"error":e.message})
            }
},

    updateSaleBoxStatus: async(req,res) => {
        try{
            const logged = req.user.id_loja
            const {status,id} = req.body
          
            if (!status) {
                return res.status(422).json({message:"Nome não preenchido"})
            }
         
          
            const data = await SalesBoxService.updateSaleBoxStatus({status,logged,id});
            return res.json(data)

          }
            catch(e){
                return res.status(400).send({"error":e.message})
            }
    },

    getAll: async (req,res) => {
        try {   
            const logged = req.user.id_loja
            
            const data = await SalesBoxService.getAll({logged});
            return res.json(data)
        }
        catch(err) {
            return  res.status(400).send({"error":err.message})
        }
    },


    reinforce: async (req,res) => {
        try {   
            const id_operador = req.user.id
            const logged = req.user.id_loja
            const {dinheiro_atual,id} = req.body
            const data = await SalesBoxService.reinforce({id,dinheiro_atual,logged,id_operador});
            return res.json(data)
        }
        catch(err) {
            return  res.status(400).send({"error":err.message})
        }
    },

    
    sangria: async (req,res) => {
        try {   
            const id_operador = req.user.id
            const logged = req.user.id_loja
            const {dinheiro_atual,id} = req.body
            const data = await SalesBoxService.sangria({id,id_operador,dinheiro_atual,logged});
            return res.json(data)
        }
        catch(err) {
            return  res.status(400).send({"error":err.message})
        }
    },
    

}


module.exports = SalesBoxController