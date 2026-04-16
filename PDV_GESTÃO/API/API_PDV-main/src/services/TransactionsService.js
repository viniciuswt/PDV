const db = require("../database")

const TransactionsService = {
    // const offset = (page - 1) * limit
    getAll: async ({logged}) => {
        let [data] = await db.query('SELECT * from movimentacoes_caixa where id_loja = ?',[logged])
        return data;
        
    },


   createTransaction: async({id_operador,logged,id_caixa,tipo,valor}) => {

    const [data] = await db.query('INSERT INTO venda(id_caixa,id_operador,id_loja,valor,tipo) values (?,?,?,?,?)',[id_caixa,id_operador,logged,valor,tipo])    
    return data
     
    }
}

module.exports = TransactionsService