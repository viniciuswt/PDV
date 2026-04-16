const SalesService = require("../services/SalesService");


const SalesController = {
    getAll: async (req,res) => {
        try {
            const logged = req.user.id_loja
            const {limit,page} = req.query
           
        const data = await SalesService.getAll({logged,limit,page});
            return res.json(data)
        }
        catch(err) {
        return  res.status(400).send({"error":err.message})
        }

    },
    createSale: async (req,res) => {
        try {
            const id_operador = req.user.id
            const logged = req.user.id_loja
           
            

            const {id_caixa,itens,metodos,comNota} = req.body
           
            const data = await SalesService.createSale({id_caixa,id_operador,itens,metodos,comNota,logged})
            return res.json(data)
        }
        catch(err) {
            return res.status(400).send({"error":err.message})
        }
},


deleteSale: async(req,res) => {
    try{
        const logged = req.user.id_loja
        const {id} = req.params
        const data = await SalesService.deleteSale({logged,id});
        return res.json(data)
      }
        catch(e){
            return res.status(400).send({"error":e.message})
        }
},

}


module.exports = SalesController