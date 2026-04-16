const TransactionsService = require("../services/TransactionsService");


const TransactionsController = {
    getAll: async (req,res) => {
        try {
            const {limit,page} = req.query
            const logged = req.user.id_loja
           
        const data = await TransactionsService.getAll({logged,limit,page});
            return res.json(data)
        }
        catch(err) {
        return  res.status(400).send({"error":err.message})
        }

    },

}


module.exports = TransactionsController