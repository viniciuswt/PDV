const db = require("../database")

const SalesService = {
    
    getAll: async ({logged}) => {
        let [data] = await db.query('SELECT * from venda where id_loja = ?',[logged])
        await Promise.all(data.map(async component => {
            const [itens] = await db.query('SELECT produtospdv.*,venda_produtospdv.quantidade FROM produtospdv INNER JOIN venda_produtospdv ON venda_produtospdv.id_produto=produtospdv.id INNER JOIN venda ON venda_produtospdv.id_venda=venda.id WHERE venda.id = ?;',[component.id]) 
            const [methods] = await db.query('SELECT * FROM metodo_pagamento INNER JOIN venda_metodopagamento ON venda_metodopagamento.id_metodoPagamento=metodo_pagamento.id INNER JOIN venda ON venda_metodopagamento.id_venda=venda.id WHERE venda.id = ?;',[component.id] )
        component.itens = itens
        component.methods = methods
        }))
        
        
        return data;
        
    },


   createSale: async({id_operador,itens,metodos,logged,id_caixa,comNota}) => {

    const value = itens.map(i => parseFloat(i.valor)*i.quantidade).reduce((a,b) => a+b,0)
    const [data] = await db.query('INSERT INTO venda(id_caixa,id_operador,id_loja,valor,comNota) values (?,?,?,?,?)',[id_caixa,id_operador,logged,value,comNota])
    const [update] = await db.query('UPDATE caixa SET dinheiro_atual = dinheiro_atual + ? WHERE id = ? AND id_loja = ?',[value,id_caixa,logged])
    const {insertId} = data
  


    await itens.map(async (produto) => {
        await db.query('INSERT INTO venda_produtospdv(id_produto,id_venda,quantidade) values (?,?,?)',[produto.id,insertId,produto.quantidade])
    })
    await metodos.map(async (metodo) => {
        await db.query('INSERT INTO venda_metodopagamento(id_metodoPagamento,id_venda,valor) values (?,?,?)',[metodo.id,insertId,metodo.valor])
    })
        
console.log(update)
return {data,update}

     
    } 

 

,

    updateSale: async(idParam,{id,nome,unidade,quantidade,valor}) => {
       /* const changed = (row) => {
            if(row == 0) {
                throw new Error("No Changes")
            }
        }*/

        let data;
        if (typeof id == "undefined") {
             [data,_] = await db.query('UPDATE produtos_feitos set nome = ?, unidade = ?, quantidade = ?, valor = ? where id = ?',
             [nome,unidade,quantidade,valor,idParam])
             return data
            
            }
        else {
            [data,_] = await db.query('UPDATE produtos_feitos set id = ?, nome = ?, unidade = ?, quantidade = ?, valor = ? where id = ?',
            [id,nome,unidade,quantidade,valor,idParam])

            return data
        }
  
    },

    deleteSale: async({id,logged}) => {
        
        const [data] = await db.query('DELETE from venda where id = ? AND id_loja = ?',[id,logged])
        return data
    }
}

module.exports = SalesService