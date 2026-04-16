const ProductsService = require("../services/ProductsService")

const ProductsController = {
    getAll: async (req,res) => {
        try {
            const logged = req.user.id_loja
            const data = await ProductsService.getAll({logged});
            return res.json(data)
        }
        catch(err) {
            return  res.status(400).send({"error":err.message})
        }
    },

    getById: async (req,res) => {
        try {
            const logged = req.user.id_loja
            const {idParam} = req.params
            const data = await ProductsService.getById({idParam,logged})
            return res.json(data)
        }
        catch(err) {
            return res.status(400).send({"error":"Falha na requisição"})
        }

    },

}


module.exports = ProductsController