const db = require("../database")

const ProductsService = {
    getAll: async ({logged}) => {
        const [data] = await db.query('SELECT * from produtospdv where id_loja = ?',[logged])
        return data;
    },

    getById: async ({idParam,logged}) => {
        const [data] = await db.query('SELECT * from produtospdv where id = ? AND id_loja = ?',[idParam,logged])
        return data
    },

}

module.exports = ProductsService