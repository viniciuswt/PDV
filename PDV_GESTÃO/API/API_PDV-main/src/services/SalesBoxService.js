const db = require("../database")

const SalesBoxService = {
  
   createdSaleBox: async({nome,logged}) => {
        const [data] = await db.query('INSERT INTO caixa(nome,id_loja) values (?,?)',[nome,logged]) 
        return data
    },

    reinforce: async({dinheiro_atual,id,logged,id_operador}) => {
        const [data] = await db.query('UPDATE caixa set dinheiro_atual = dinheiro_atual + ? where  id_loja = ? AND id = ?',[dinheiro_atual,logged,id]) 
        await db.query('INSERT INTO movimentacoes_caixa(id_caixa,id_operador,id_loja,valor,tipo) values (?,?,?,?,?)',[id,id_operador,logged,dinheiro_atual,"Reforço"])    
        return data
    },
    sangria: async({dinheiro_atual,id,logged,id_operador}) => {
        const [queryDinheiroAtual] = await db.query('SELECT dinheiro_atual from caixa  where  id_loja = ? AND id = ?',[logged,id])
        const valorCaixa = queryDinheiroAtual[0].dinheiro_atual
        

        if (dinheiro_atual > valorCaixa)
            throw new Error("Valor a ser retirado é maior do que o valor definido em caixa")
        const [data] = await db.query('UPDATE caixa set dinheiro_atual = dinheiro_atual - ? where  id_loja = ? AND id = ?',[dinheiro_atual,logged,id]) 
        await db.query('INSERT INTO movimentacoes_caixa(id_caixa,id_operador,id_loja,valor,tipo) values (?,?,?,?,?)',[id,id_operador,logged,dinheiro_atual,"Sangria"])    
        return data
    },

    openSaleBox: async({logged,dinheiro_atual,id}) => {
        const [statusVeri] = await db.query('SELECT status from caixa where  id_loja = ? AND id = ?',[logged,id])
        if (statusVeri.length == 0) {
            throw new Error("Caixa não existe")
        }
        if (statusVeri[0].status) {
            throw new Error("Caixa já está aberto")
        }
        const [data] = await db.query('UPDATE caixa set status = true, dinheiro_atual = ? where id_loja = ? AND id = ?',[dinheiro_atual,logged,id]) 
        return data
    },
    deleteSaleBox: async({logged,id}) => {
        const [statusVeri] = await db.query('SELECT status,dinheiro_atual from caixa where  id_loja = ? AND id = ?',[logged,id])
        console.log(statusVeri)
        if (statusVeri[0].status) {
            throw new Error("Caixa está aberto")
        }
        if (statusVeri[0].dinheiro_atual >0) {
            throw new Error("É Necessário retirar o dinheiro do caixa antes")
        }

        const [data] = await db.query('DELETE FROM caixa where id_loja = ? AND id = ?',[logged,id]) 
        return data
    },
    closeSaleBox: async({logged,dinheiro_atual,id}) => {
        const [statusVeri] = await db.query('SELECT status from caixa where  id_loja = ? AND id = ?',[logged,id])
        if (!statusVeri[0].status) {
            throw new Error("Caixa já está fechado")
        }
        const [data] = await db.query('UPDATE caixa set status = false, dinheiro_atual = ? where id_loja = ? AND id = ?',[dinheiro_atual,logged,id]) 
        return data
    },
    updateSaleBoxStatus: async({logged,status,id}) => {
        const [data] = await db.query('UPDATE caixa set status = ? where id_loja = ? AND id = ?',[status,logged,id]) 
        return data
    },

    getAll:async({logged}) => {
        const [data] = await db.query('SELECT * FROM caixa where id_loja = ?',[logged])
        return data
    },


}

module.exports = SalesBoxService